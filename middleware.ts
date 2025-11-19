import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Only protect dashboard routes
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        const authToken = request.cookies.get('auth_token');

        if (!authToken || authToken.value !== 'authenticated') {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/dashboard/:path*',
};
