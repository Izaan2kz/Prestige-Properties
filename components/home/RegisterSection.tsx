'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  unitInterest: string
  purpose: string
  subject?: string
  message?: string
}

interface RegisterSectionProps {
  /** If true, renders full-page contact layout with subject + message fields */
  fullPage?: boolean
  /** Identifies which page the form was submitted from */
  source?: 'home' | 'register' | 'contact'
}

// Phone regex: optional +, then digits/spaces/dashes/dots/parens, min 7 digits total
const PHONE_REGEX = /^\+?[\d\s\-().]{7,20}$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function RegisterSection({ fullPage = false, source = 'home' }: RegisterSectionProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source }),
      })
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    background: 'var(--white)',
    border: '1px solid var(--grey-200)',
    color: 'var(--grey-900)',
    padding: '14px 18px',
    fontSize: '14px',
    fontFamily: 'var(--sans)',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '10px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--grey-500)',
  }

  const errorStyle: React.CSSProperties = {
    fontSize: '11px',
    color: '#c0392b',
    marginTop: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  }

  const fieldStyle = (hasError: boolean): React.CSSProperties => ({
    ...inputStyle,
    borderColor: hasError ? '#c0392b' : 'var(--grey-200)',
  })

  if (status === 'success') {
    return (
      <section
        style={{ padding: '100px 60px', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}
        id="register"
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px' }}>
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: 'rgba(39,174,96,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2" width="36" height="36">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 300, color: 'var(--grey-900)' }}>
            Thank You for Your Enquiry
          </div>
          <p style={{ fontSize: '15px', color: 'var(--grey-700)', lineHeight: 1.8, fontWeight: 300, maxWidth: '480px' }}>
            One of our property specialists will be in touch within 24 hours to assist you.
          </p>
          <button
            onClick={() => setStatus('idle')}
            style={{
              marginTop: '8px', background: 'transparent', border: '1px solid var(--gold)',
              color: 'var(--gold)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '14px 32px', cursor: 'pointer', fontFamily: 'var(--sans)', fontWeight: 500,
            }}
          >
            Submit Another Enquiry
          </button>
        </div>
      </section>
    )
  }

  return (
    <section
      style={{ padding: '100px 60px', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}
      id="register"
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div
          className="register-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '100px',
            alignItems: 'center',
          }}
        >
          {/* Left — Contact Info */}
          <div>
            <SectionTag>Get in Touch</SectionTag>
            <SectionTitle>
              Register Your<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Interest Today</em>
            </SectionTitle>
            <p style={{ fontSize: '14px', lineHeight: 1.9, color: 'var(--grey-700)', marginTop: '24px', fontWeight: 300 }}>
              Our dedicated property specialists are ready to guide you through everything —
              from floor plan selection to financing options and handover timelines.
              Reach out and take your first step toward waterfront living.
            </p>
            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { label: 'Phone', val: '+971 4 000 0000' },
                { label: 'Email', val: 'sales@prestigeproperties.ae' },
                { label: 'Office', val: 'Deira Creek, Dubai, UAE', small: true },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                    {row.label}
                  </div>
                  <div style={{ fontSize: row.small ? '14px' : '16px', color: row.small ? 'var(--grey-500)' : 'var(--grey-900)' }}>
                    {row.val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {status === 'error' && (
              <div style={{ padding: '16px 20px', background: '#fdf0f0', border: '1px solid #e0a0a0', marginBottom: '24px', fontSize: '13px', color: '#8b1a1a', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '18px' }}>⚠</span>
                Something went wrong. Please try again or call us directly.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Name Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle} htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Ahmed"
                    style={fieldStyle(!!errors.firstName)}
                    {...register('firstName', {
                      required: 'First name is required',
                      minLength: { value: 2, message: 'Minimum 2 characters' },
                    })}
                  />
                  {errors.firstName && <span style={errorStyle}>⚠ {errors.firstName.message}</span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle} htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Al Rashid"
                    style={fieldStyle(!!errors.lastName)}
                    {...register('lastName', {
                      required: 'Last name is required',
                      minLength: { value: 2, message: 'Minimum 2 characters' },
                    })}
                  />
                  {errors.lastName && <span style={errorStyle}>⚠ {errors.lastName.message}</span>}
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                <label style={labelStyle} htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="ahmed@email.com"
                  style={fieldStyle(!!errors.email)}
                  {...register('email', {
                    required: 'Email address is required',
                    pattern: {
                      value: EMAIL_REGEX,
                      message: 'Please enter a valid email (e.g. name@example.com)',
                    },
                  })}
                />
                {errors.email && <span style={errorStyle}>⚠ {errors.email.message}</span>}
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                <label style={labelStyle} htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+971 50 123 4567"
                  style={fieldStyle(!!errors.phone)}
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: PHONE_REGEX,
                      message: 'Please enter a valid phone number (e.g. +971 50 123 4567)',
                    },
                  })}
                />
                {errors.phone && <span style={errorStyle}>⚠ {errors.phone.message}</span>}
              </div>

              {/* Subject (full page only) */}
              {fullPage && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  <label style={labelStyle} htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Enquiry about Creek View Apartments"
                    style={fieldStyle(!!errors.subject)}
                    {...register('subject', { required: fullPage ? 'Subject is required' : false })}
                  />
                  {errors.subject && <span style={errorStyle}>⚠ {errors.subject.message}</span>}
                </div>
              )}

              {/* Unit + Purpose */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle} htmlFor="unitInterest">Unit Interest</label>
                  <select
                    id="unitInterest"
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    {...register('unitInterest')}
                  >
                    <option>Studio</option>
                    <option>1 Bedroom</option>
                    <option>2 Bedroom</option>
                    <option>3 Bedroom</option>
                    <option>4 Bedroom</option>
                    <option>Penthouse</option>
                    <option>Commercial Office</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle} htmlFor="purpose">Purpose</label>
                  <select
                    id="purpose"
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    {...register('purpose')}
                  >
                    <option>Investment</option>
                    <option>Own Use</option>
                    <option>Both</option>
                  </select>
                </div>
              </div>

              {/* Message (full page only) */}
              {fullPage && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  <label style={labelStyle} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us more about your requirements..."
                    style={{ ...fieldStyle(!!errors.message), resize: 'vertical' }}
                    {...register('message', { required: fullPage ? 'Message is required' : false })}
                  />
                  {errors.message && <span style={errorStyle}>⚠ {errors.message.message}</span>}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="submit-btn"
                style={{
                  width: '100%',
                  padding: '18px',
                  background: 'var(--gold)',
                  border: 'none',
                  color: 'var(--white)',
                  fontSize: '11px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  cursor: status === 'loading' ? 'wait' : 'pointer',
                  fontFamily: 'var(--sans)',
                  fontWeight: 500,
                  transition: 'background 0.3s',
                  marginTop: '8px',
                  opacity: status === 'loading' ? 0.7 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                {status === 'loading' ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                      <path d="M12 2a10 10 0 0 1 10 10" />
                    </svg>
                    Submitting…
                  </>
                ) : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .submit-btn:hover:not(:disabled) { background: var(--gold-dark) !important; }
        input:focus, select:focus, textarea:focus { border-color: var(--gold) !important; }
        @media (max-width: 1024px) {
          .register-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}
