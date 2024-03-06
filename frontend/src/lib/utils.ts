import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ListImageDefault } from '~/ultils/constants'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const imgPreview = (file: File | Blob): Promise<string> => {
    return new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => {
            resolve(reader.result as string)
        }
        reader.readAsDataURL(file)
    })
}

export const imgPreviewUrl = (file: File | Blob): string => {
    return URL.createObjectURL(file)
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const revalidateImage = (url: string) => {
    const checkImageDefault = ListImageDefault.find((img) => img.src === url)
    if (checkImageDefault) {
        return true
    }

    return false
}
