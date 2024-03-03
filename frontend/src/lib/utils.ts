import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

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
