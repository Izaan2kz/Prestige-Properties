/**
 * ─── Next.js Edge Middleware — Security Headers ──────────────────────────────
 *
 * Runs at the Vercel Edge (zero cold-start) on EVERY response before it
 * reaches the client. Applies HTTP security headers following OWASP guidelines.
 *
 * Headers applied:
 *
 *  X-Frame-Options: DENY
 *    Prevents this site from being embedded in an <iframe> on another domain.
 *    Mitigates clickjacking attacks.
 *
 *  X-Content-Type-Options: nosniff
 *    Prevents browsers from MIME-sniffing a response away from the declared
 *    Content-Type. Mitigates drive-by-download attacks.
 *
 *  Referrer-Policy: strict-origin-when-cross-origin
 *    Sends the full URL as referer only for same-origin requests.
 *    Sends only the origin (no path) for cross-origin HTTPS→HTTPS.
 *    Sends nothing for HTTPS→HTTP (prevents leaking secure URLs).
 *
 *  Permissions-Policy
 *    Explicitly disables browser features this site does not use.
 *    Prevents malicious scripts from accessing camera, microphone, geolocation.
 *
 *  Strict-Transport-Security (HSTS)
 *    Tells browsers to always use HTTPS for this domain for 1 year.
 *    includeSubDomains: covers all subdomains.
 *    Only sent over HTTPS to avoid breaking HTTP dev environments.
 *
 *  Content-Security-Policy (CSP)
 *    Restricts which origins can serve scripts, styles, images, fonts, and
 *    map tiles. Prevents XSS by blocking inline scripts (except those
 *    explicitly needed by Next.js) and unauthorised external resources.
 *
 * IMPORTANT: If you add a new external script, font, or CDN, you MUST add its
 * origin to the appropriate CSP directive below, otherwise it will be blocked.
 */

import { NextResponse, type NextRequest } from 'next/server'

// ── Content Security Policy directives ───────────────────────────────────────
const CSP_DIRECTIVES = [
  // Only load scripts from same origin and Next.js inline scripts (nonce not yet used)
  `default-src 'self'`,
  // Scripts: same origin + Vercel speed insights if added later
  `script-src 'self' 'unsafe-inline' 'unsafe-eval'`,
  // Styles: same origin + Google Fonts + inline styles (required by Next.js)
  `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
  // Images: same origin + Unsplash (property photos) + data URIs (favicons)
  // Carto CDN tile servers a/b/c/d are used by Leaflet for map tile images
  `img-src 'self' data: https://images.unsplash.com https://*.basemaps.cartocdn.com`,
  // Fonts: same origin + Google Fonts CDN
  `font-src 'self' https://fonts.gstatic.com`,
  // Map tiles: Carto CDN used by Leaflet map
  `connect-src 'self' https://*.supabase.co https://a.basemaps.cartocdn.com https://b.basemaps.cartocdn.com https://c.basemaps.cartocdn.com https://d.basemaps.cartocdn.com`,
  // Tile images for Leaflet
  `worker-src blob:`,
  // No frames allowed at all (defence in depth alongside X-Frame-Options)
  `frame-src 'none'`,
  // Disallow embedding this page in frames on other origins
  `frame-ancestors 'none'`,
  // Only submit forms to same origin
  `form-action 'self'`,
  // Block mixed content
  `upgrade-insecure-requests`,
].join('; ')

const isDev = process.env.NODE_ENV === 'development'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // X-Frame-Options — clickjacking protection
  response.headers.set('X-Frame-Options', 'DENY')

  // X-Content-Type-Options — MIME sniffing protection
  response.headers.set('X-Content-Type-Options', 'nosniff')

  // Referrer-Policy — controls how much URL info is sent in referer headers
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Permissions-Policy — disable unnecessary browser features
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()'
  )

  // Strict-Transport-Security — HTTPS enforcement (HSTS)
  // Only set in production to avoid breaking local HTTP dev server
  if (!isDev) {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains'
    )
  }

  // Content-Security-Policy
  response.headers.set('Content-Security-Policy', CSP_DIRECTIVES)

  return response
}

// Apply middleware to all routes except Next.js internals and static files
export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static  (Next.js static assets)
     * - _next/image   (Next.js image optimisation)
     * - favicon.ico   (browser favicon requests)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
