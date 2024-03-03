'use server'

import { signIn, signOut } from '~/auth'

export const authAction = async (proivder: string) => {
    try {
        await signIn(proivder)
    } catch (error: any) {
        if (error.message === 'NEXT_REDIRECT') {
            throw error
        }
        return error.message
    }
}

export const logoutAction = async () => {
    try {
        await signOut()
    } catch (error: any) {
        return error.message
    }
}
