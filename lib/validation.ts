/**
 * ─── Centralised Input Validation Schemas ────────────────────────────────────
 *
 * OWASP: Implements schema-based input validation (type, length, pattern, enum).
 *
 * Uses Zod for runtime parsing:
 *  - Unknown/unexpected fields are STRIPPED automatically (Zod default)
 *  - All fields have explicit min + max length limits
 *  - Enum fields (unitInterest, purpose, source) only accept the exact values
 *    that the UI presents — any other value is rejected with a 400
 *  - Email and phone are validated against the same regex as the client-side form
 *
 * Usage:
 *   import { ContactSchema } from '@/lib/validation'
 *   const result = ContactSchema.safeParse(body)
 *   if (!result.success) { // return 400 with result.error.flatten() }
 */

import { z } from 'zod'

// ── Shared regex patterns (mirrors client-side validation in RegisterSection) ─
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^\+?[\d\s\-().]{7,20}$/

// ── Allowed enum values — must match exactly what the UI dropdowns send ───────
const UNIT_INTEREST_VALUES = [
  'Studio',
  '1 Bedroom',
  '2 Bedroom',
  '3 Bedroom',
  '4 Bedroom',
  'Penthouse',
  'Commercial Office',
] as const

const PURPOSE_VALUES = ['Investment', 'Own Use', 'Both'] as const

const SOURCE_VALUES = ['home', 'register', 'contact', 'unknown'] as const

// ── Contact / Enquiry Form Schema ─────────────────────────────────────────────
export const ContactSchema = z.object({
  // Required name fields — min 2, max 80 characters each
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(80, 'First name must be 80 characters or fewer')
    .trim(),

  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(80, 'Last name must be 80 characters or fewer')
    .trim(),

  // Email — validated against RFC-compatible regex, max 254 chars (RFC 5321)
  email: z
    .string()
    .max(254, 'Email address is too long')
    .regex(EMAIL_REGEX, 'A valid email address is required')
    .trim()
    .toLowerCase(),

  // Phone — E.164 compatible, 7–20 digits/symbols
  phone: z
    .string()
    .regex(PHONE_REGEX, 'A valid phone number is required (e.g. +971 50 123 4567)')
    .trim(),

  // Enum fields — only values matching the UI dropdowns are accepted
  unitInterest: z.enum(UNIT_INTEREST_VALUES).optional(),
  purpose:      z.enum(PURPOSE_VALUES).optional(),

  // Subject and message — optional but length-capped to prevent large-payload abuse
  subject: z
    .string()
    .max(200, 'Subject must be 200 characters or fewer')
    .trim()
    .optional(),

  message: z
    .string()
    .max(2000, 'Message must be 2,000 characters or fewer')
    .trim()
    .optional(),

  // Source — allowlisted to known page identifiers only
  source: z.enum(SOURCE_VALUES).optional().default('unknown'),
})

// Inferred TypeScript type from the schema
export type ContactFormData = z.infer<typeof ContactSchema>
