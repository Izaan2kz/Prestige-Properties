import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

interface ContactPayload {
  firstName: string
  lastName: string
  email: string
  phone: string
  unitInterest?: string
  purpose?: string
  subject?: string
  message?: string
  source?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^\+?[\d\s\-().]{7,20}$/

export async function POST(request: NextRequest) {
  // ── Guard: ensure env vars are present at runtime ─────────────────────────
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceKey) {
    console.error('Missing Supabase environment variables')
    return NextResponse.json(
      { success: false, error: 'Server configuration error.' },
      { status: 500 }
    )
  }

  // Server-only admin client created at request time (bypasses RLS entirely)
  const supabaseAdmin = createClient(supabaseUrl, serviceKey)

  try {
    const body: ContactPayload = await request.json()

    // ── Server-side validation ───────────────────────────────────────────────
    const errors: Record<string, string> = {}

    if (!body.firstName || body.firstName.trim().length < 2)
      errors.firstName = 'First name must be at least 2 characters'
    if (!body.lastName || body.lastName.trim().length < 2)
      errors.lastName = 'Last name must be at least 2 characters'
    if (!body.email || !EMAIL_REGEX.test(body.email.trim()))
      errors.email = 'A valid email address is required'
    if (!body.phone || !PHONE_REGEX.test(body.phone.trim()))
      errors.phone = 'A valid phone number is required (e.g. +971 50 123 4567)'

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 })
    }

    // ── Save to Supabase via service role (no RLS restrictions) ─────────────
    const { error: dbError } = await supabaseAdmin.from('enquiries').insert([
      {
        first_name:    body.firstName.trim(),
        last_name:     body.lastName.trim(),
        email:         body.email.trim().toLowerCase(),
        phone:         body.phone.trim(),
        unit_interest: body.unitInterest ?? null,
        purpose:       body.purpose ?? null,
        subject:       body.subject ?? null,
        message:       body.message ?? null,
        source:        body.source ?? 'unknown',
      },
    ])

    if (dbError) {
      console.error('Supabase insert error:', dbError)
      return NextResponse.json(
        { success: false, error: 'Failed to save enquiry. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, message: 'Enquiry received' }, { status: 200 })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
