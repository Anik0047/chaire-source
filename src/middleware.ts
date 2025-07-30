import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import mainConfig from '@/config/index'

const secret = mainConfig.NEXTAUTH_SECRET

// Auth pages that logged-in users shouldn't access
// const authPages = [
//     '/login',
//     '/register',
//     '/forgot-password',
//     '/reset-password',
//     '/admin/login'
// ]

// User auth pages that logged-in users shouldn't access
const userAuthPages = [
    '/auth/login',
    '/auth/register',
    '/auth/forgot-password',
    '/auth/reset-password'
]

// Admin auth pages that logged-in admins shouldn't access
const adminAuthPages = [
    '/admin/login'
]

// Admin protected routes
const adminProtectedRoutes = [
    '/admin',
    '/admin/dashboard',
    '/admin/:path*'
]

// Regular protected routes for users
const userProtectedRoutes = [
    '/checkout',
    '/account',
    '/account/:path*'
]

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const token = await getToken({ req: request, secret })

    // 1. Handle auth pages redirect for logged-in users
    // if (authPages.some(page => pathname.startsWith(page))) {
    //     if (token) {
    //         const redirectUrl = token.role === 'admin' ? '/admin' : '/'
    //         return NextResponse.redirect(new URL(redirectUrl, request.url))
    //     }
    //     return NextResponse.next()
    // }

    // 1. Handle user auth pages redirect
    if (userAuthPages.some(page => pathname.startsWith(page))) {
        if (token) {
            // Only redirect if user is logged in as user (not admin)
            if (token.role === 'user') {
                return NextResponse.redirect(new URL('/', request.url))
            }
        }
        return NextResponse.next()
    }

    // 2. Handle admin auth pages redirect
    if (adminAuthPages.some(page => pathname.startsWith(page))) {
        if (token) {
            // Only redirect if user is logged in as admin
            if (token.role === 'admin') {
                return NextResponse.redirect(new URL('/admin', request.url))
            }
        }
        return NextResponse.next()
    }

    // 2. Handle admin protected routes
    if (adminProtectedRoutes.some(route => pathname.startsWith(route))) {
        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', request.url))
        }
        if (token.role !== 'admin') {
            return NextResponse.redirect(new URL('/unauthorized', request.url))
        }
        return NextResponse.next()
    }

    // 3. Handle user protected routes
    if (userProtectedRoutes.some(route => pathname.startsWith(route))) {
        if (!token) {
            return NextResponse.redirect(new URL('/auth/login', request.url))
        }
        return NextResponse.next()
    }

    // 4. All other routes are public and accessible
    return NextResponse.next()
}

export const config = {
    matcher: [
        // Explicitly list all routes that need middleware processing
        '/auth/login',
        '/auth/register',
        '/auth/forgot-password',
        '/auth/reset-password',
        '/admin/:path*',
        '/checkout',
        '/account/:path*'
    ]
}