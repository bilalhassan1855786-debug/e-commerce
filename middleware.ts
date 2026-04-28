import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/checkout')) {
    const secret = request.headers.get('x-checkout-secret')
    if (secret !== process.env.CHECKOUT_SECRET) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
}
