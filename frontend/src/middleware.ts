import NextAuth, { Session } from 'next-auth'
import { NextRequest } from 'next/server'

export default NextAuth({
    pages: {
        signIn: '/login',
    },
    providers: [],
    callbacks: {
        async authorized({ auth, request }: { auth: Session | null; request: NextRequest }) {
            const user = auth?.user

            const isAuthPage = request.nextUrl.pathname.startsWith('/login')
            const isOnboardingPage = request.nextUrl.pathname.startsWith('/onboarding')

            if (!user && isOnboardingPage) {
                return false
            }

            if (user && isAuthPage) {
                return Response.redirect(new URL('/onboarding', request.nextUrl))
            }

            return true
        },
    },
}).auth

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
