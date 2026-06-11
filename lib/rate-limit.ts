/**
 * ─── In-Memory Sliding Window Rate Limiter ──────────────────────────────────
 *
 * OWASP: Implements rate limiting per unique client identifier (IP address).
 *
 * How it works:
 *  - Each IP gets a "window" of `windowMs` milliseconds.
 *  - Inside that window, up to `limit` requests are allowed.
 *  - On the (limit + 1)th request, { success: false } is returned.
 *  - Old request timestamps outside the current window are automatically pruned.
 *
 * Trade-offs:
 *  - In-memory: resets on serverless cold-start (acceptable for Vercel functions).
 *  - For enterprise-grade persistence, swap the Map for Upstash Redis.
 *  - IP is read from x-forwarded-for (set by Vercel's edge) then x-real-ip.
 */

interface RateLimitOptions {
  /** Maximum number of requests allowed within the window */
  limit: number
  /** Time window in milliseconds */
  windowMs: number
}

interface RateLimitResult {
  /** Whether this request is allowed through */
  success: boolean
  /** How many requests remain in the current window */
  remaining: number
  /** Unix timestamp (ms) when the window resets */
  resetMs: number
}

// Map<clientId, timestamp[]> — stores timestamps of requests within the window
const store = new Map<string, number[]>()

/**
 * Extracts the client IP from the request headers.
 * Vercel sets x-forwarded-for to the real client IP.
 * Falls back through x-real-ip → "unknown".
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    // x-forwarded-for may be a comma-separated list; first entry is the client
    return forwarded.split(',')[0].trim()
  }
  return request.headers.get('x-real-ip') ?? 'unknown'
}

/**
 * Checks whether a client (identified by `id`) has exceeded the rate limit.
 *
 * @param id       - A unique client identifier (typically the IP address)
 * @param options  - `limit` (max requests) and `windowMs` (window duration)
 * @returns        - { success, remaining, resetMs }
 *
 * @example
 * const ip = getClientIp(request)
 * const { success, remaining, resetMs } = rateLimit(ip, { limit: 10, windowMs: 60_000 })
 * if (!success) {
 *   return new Response('Too Many Requests', {
 *     status: 429,
 *     headers: { 'Retry-After': String(Math.ceil((resetMs - Date.now()) / 1000)) }
 *   })
 * }
 */
export function rateLimit(id: string, options: RateLimitOptions): RateLimitResult {
  const { limit, windowMs } = options
  const now = Date.now()
  const windowStart = now - windowMs

  // Retrieve existing timestamps for this client, pruning expired ones
  const timestamps = (store.get(id) ?? []).filter(t => t > windowStart)

  if (timestamps.length >= limit) {
    // Client has exceeded the limit — return earliest timestamp as reset point
    const resetMs = (timestamps[0] ?? now) + windowMs
    return { success: false, remaining: 0, resetMs }
  }

  // Request is within limit — record this timestamp and allow through
  timestamps.push(now)
  store.set(id, timestamps)

  const resetMs = (timestamps[0] ?? now) + windowMs
  return {
    success: true,
    remaining: limit - timestamps.length,
    resetMs,
  }
}
