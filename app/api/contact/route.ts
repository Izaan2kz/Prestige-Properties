/**
 * ─── POST /api/contact — Enquiry Submission Endpoint ─────────────────────────
 *
 * Security hardening applied (OWASP guidelines):
 *
 *  1. RATE LIMITING (A04: Insecure Design)
 *     IP-based sliding window: 10 requests per 60 seconds per client IP.
 *     Returns 429 Too Many Requests with a Retry-After header when exceeded.
 *
 *  2. INPUT VALIDATION + SANITISATION (A03: Injection)
 *     All input is parsed through a strict Zod schema (lib/validation.ts).
 *     Unknown/unexpected fields are stripped automatically.
 *     Enum fields (unitInterest, purpose, source) only accept allowlisted values.
 *     All text fields have maximum length caps to prevent large-payload abuse.
 *
 *  3. SECURE API KEY HANDLING (A02: Cryptographic Failures)
 *     SUPABASE_SERVICE_ROLE_KEY has no NEXT_PUBLIC_ prefix — never sent to browser.
 *     Client is instantiated inside the handler (not at module level).
 *     Missing env vars cause a clean 500 with no internal detail leaked to caller.
 *
 *  4. SAFE ERROR RESPONSES (A09: Security Logging and Monitoring Failures)
 *     Internal error details are logged server-side only (console.error).
 *     Client receives only generic, user-friendly error messages.
 *     No stack traces, DB errors, or config details are ever returned to caller.
 */

import { NextRequest, NextResponse } from 'next/server'
import { createClient }              from '@supabase/supabase-js'
import { rateLimit, getClientIp }   from '@/lib/rate-limit'
import { ContactSchema }             from '@/lib/validation'

// ── Rate limit configuration ──────────────────────────────────────────────────
// 10 requests per 60 seconds per IP — allows genuine users while blocking bots
const RATE_LIMIT_REQUESTS = 10
const RATE_LIMIT_WINDOW_MS = 60_000 // 60 seconds

export async function POST(request: NextRequest) {

  // ── STEP 1: Rate limiting ──────────────────────────────────────────────────
  const clientIp = getClientIp(request)
  const { success: allowed, remaining, resetMs } = rateLimit(clientIp, {
    limit:    RATE_LIMIT_REQUESTS,
    windowMs: RATE_LIMIT_WINDOW_MS,
  })

  if (!allowed) {
    const retryAfterSeconds = Math.ceil((resetMs - Date.now()) / 1000)
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please wait and try again.' },
      {
        status: 429,
        headers: {
          // Retry-After tells the client exactly how long to wait (RFC 7231)
          'Retry-After': String(retryAfterSeconds),
          // Expose remaining count in response headers for debugging
          'X-RateLimit-Limit':     String(RATE_LIMIT_REQUESTS),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset':     String(resetMs),
        },
      }
    )
  }

  // ── STEP 2: Environment variable guard ────────────────────────────────────
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceKey) {
    // Log internally — never expose config details to the caller
    console.error('[contact] Missing Supabase environment variables')
    return NextResponse.json(
      { success: false, error: 'Service temporarily unavailable. Please try again later.' },
      { status: 500 }
    )
  }

  // Server-only Supabase admin client — bypasses RLS for the enquiries insert.
  // Created per-request (inside handler) so the key is never captured at
  // module evaluation time during Vercel's build-phase static analysis.
  const supabaseAdmin = createClient(supabaseUrl, serviceKey)

  try {
    // ── STEP 3: Parse + validate request body with Zod ────────────────────
    // .safeParse() never throws — returns { success, data } or { success, error }
    // Unknown fields are stripped silently by Zod's default .strip() behaviour.
    let rawBody: unknown
    try {
      rawBody = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid request format.' },
        { status: 400 }
      )
    }

    const parsed = ContactSchema.safeParse(rawBody)

    if (!parsed.success) {
      // Flatten Zod errors into a { field: message } map for the client form
      const fieldErrors = parsed.error.flatten().fieldErrors
      // Only expose field-level validation messages — not internal schema details
      return NextResponse.json(
        { success: false, errors: fieldErrors },
        {
          status: 400,
          headers: {
            'X-RateLimit-Remaining': String(remaining),
          },
        }
      )
    }

    // `data` is now fully typed, validated, sanitised, and has unknown fields stripped
    const data = parsed.data

    // ── STEP 4: Persist to Supabase (service role bypasses RLS) ───────────
    const { error: dbError } = await supabaseAdmin.from('enquiries').insert([
      {
        first_name:    data.firstName,   // already trimmed by Zod
        last_name:     data.lastName,
        email:         data.email,       // already lowercased by Zod
        phone:         data.phone,
        unit_interest: data.unitInterest ?? null,
        purpose:       data.purpose      ?? null,
        subject:       data.subject      ?? null,
        message:       data.message      ?? null,
        source:        data.source,
      },
    ])

    if (dbError) {
      // Log the real error server-side only — never leak DB details to caller
      console.error('[contact] Supabase insert error:', dbError.message)
      return NextResponse.json(
        { success: false, error: 'Failed to save enquiry. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Enquiry received' },
      {
        status: 200,
        headers: { 'X-RateLimit-Remaining': String(remaining) },
      }
    )

  } catch (err) {
    // Catch-all — log internally, return generic message
    console.error('[contact] Unexpected error:', err)
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
