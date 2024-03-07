'use server'

import { revalidatePath } from 'next/cache'
import { v2 as cloudinary } from 'cloudinary'

import { signIn, signOut } from '~/auth'
import * as request from '~/ultils/httpRequest.config'
import { revalidateImage } from './utils'
import { toast } from 'sonner'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

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

export const updateUserAction = async (
    userId: string,
    fullname: string,
    avatar: string,
    email: string,
) => {
    try {
        if (avatar === '') {
            avatar = `https://avatar.iran.liara.run/username?username=${fullname}`
        } else {
            const checkImageDefault = revalidateImage(avatar)

            if (!checkImageDefault) {
                cloudinary.api.delete_resources_by_prefix(`whatsapp/avatars/${email}`)

                const { secure_url } = await cloudinary.uploader.upload(avatar, {
                    folder: `whatsapp/avatars/${email}`,
                })
                avatar = secure_url
            }
        }

        const data = await request.post(`/api/users/update/${userId}`, {
            fullname,
            avatar,
        })

        if (data.error) {
            return data.error
        }
        revalidatePath('/onboarding')
        return data
    } catch (error: any) {
        return error.message
    }
}
