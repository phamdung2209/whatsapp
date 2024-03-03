import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import request from './ultils/httpRequest.config'
import { IUserDocument } from './types'
import toast from 'react-hot-toast'

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    secret: process.env.AUTH_SECRET,
    callbacks: {
        async signIn({ user, account, profile }) {
            try {
                const { data } = await request.post('/api/users/get-by-email', {
                    email: user?.email,
                })

                if (data.error) {
                    const newUser: any = request.post('/api/auth/sign-up', {
                        email: user.email,
                        username: user.name,
                        fullname: profile?.login ?? user.name,
                        avatar: user.image,
                        provider: account?.provider,
                    })

                    if (newUser.error) {
                        console.log('Error in signIn: (auth.ts)', newUser.error)
                        // return false
                    }
                }
            } catch (error: any) {
                console.log('Error in signIn: (auth.ts)', error.message)
            }

            return true
        },

        async session({ session }) {
            try {
                if (session?.user) {
                    const { data } = await request.post('/api/users/get-by-email', {
                        email: session?.user?.email,
                    })

                    if (data.error) {
                        throw new Error('User not found')
                    } else {
                        session.user = {
                            ...session.user,
                            _id: (data as IUserDocument)._id,
                        }
                        return session
                    }
                } else {
                    throw new Error('Invalid session')
                }
            } catch (error) {
                throw new Error('Invalid session')
            }
        },
    },
})
