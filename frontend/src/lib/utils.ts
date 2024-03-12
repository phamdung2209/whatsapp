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

// check link url from message
async function checkLinkAccessibility(link: string) {
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
        link = 'http://' + link
    }

    try {
        const res = await fetch(link, {
            method: 'HEAD',
            mode: 'no-cors',
        })
        if (res) {
            return true
        } else {
            return false
        }
    } catch (error: any) {
        return false
    }
}

export const isLinkUrl = (message: string) => {
    const linkRegex =
        /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,}\S*)|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))/gi
    const links = message.match(linkRegex)

    if (links) {
        console.log('Tin nhắn chứa một hoặc nhiều liên kết:')
        links.forEach((link) => {
            link = link.replace(/[^a-zA-Z0-9-]+$/, '')
            return checkLinkAccessibility(link)
        })
    }

    return false
}

export const extractTime = (date: string): string => {
    const now: Date = new Date()
    const sentTime: Date = new Date(date)

    const diffInMinutes: number = Math.floor((now.getTime() - sentTime.getTime()) / (1000 * 60))

    if (diffInMinutes < 1) {
        return 'Sent just now'
    } else if (diffInMinutes < 60) {
        return `Sent ${diffInMinutes}m ago`
    } else {
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric',
        }
        const sameDayFormat: string = sentTime.toLocaleDateString('en-US', options)

        if (
            now.getFullYear() === sentTime.getFullYear() &&
            now.getMonth() === sentTime.getMonth() &&
            now.getDate() === sentTime.getDate()
        ) {
            return `Today, ${sameDayFormat}`
        } else {
            const dateOptions: Intl.DateTimeFormatOptions = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            }
            const differentDayFormat: string = sentTime.toLocaleDateString('en-US', dateOptions)
            return differentDayFormat
        }
    }
}

export const funEmojis = [
    '👾',
    '⭐',
    '🌟',
    '🎉',
    '🎊',
    '🎈',
    '🎁',
    '🎂',
    '🎄',
    '🎃',
    '🎗',
    '🎟',
    '🎫',
    '🎖',
    '🏆',
    '🏅',
    '🥇',
    '🥈',
    '🥉',
    '⚽',
    '🏀',
    '🏈',
    '⚾',
    '🎾',
    '🏐',
    '🏉',
    '🎱',
    '🏓',
    '🏸',
    '🥅',
    '🏒',
    '🏑',
    '🏏',
    '⛳',
    '🏹',
    '🎣',
    '🥊',
    '🥋',
    '🎽',
    '⛸',
    '🥌',
    '🛷',
    '🎿',
    '⛷',
    '🏂',
    '🏋️',
    '🤼',
    '🤸',
    '🤺',
    '⛹️',
    '🤾',
    '🏌️',
    '🏇',
    '🧘',
]

export const getRandomEmoji = () => {
    return funEmojis[Math.floor(Math.random() * funEmojis.length)]
}
