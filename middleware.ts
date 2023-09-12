import { NextRequest, NextResponse } from 'next/server'

export function middleware (request: NextRequest) {
  const responseHeaders = new Headers()
  responseHeaders.set('X-Frame-Options', 'DENY')
  responseHeaders.set('X-Content-Type-Options', 'nosniff')
  responseHeaders.set('Strict-Transport-Security', 'max-age=3571000; includeSubDomains; preload')

  const response = NextResponse.next({
    headers: responseHeaders
  })

  return response
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|match|static|fonts|api/auth|og).*)']
}
