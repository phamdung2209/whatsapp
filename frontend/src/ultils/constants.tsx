import { MdGroup, MdGroups } from 'react-icons/md'

type TListImageDefault = {
    id: number
    src: string
    alt: string
}[]

type TNewContactsDefault = {
    id: number
    title: string
    icon: JSX.Element
}[]

export const ListImageDefault: TListImageDefault = [
    {
        id: 1,
        src: '/avatars/1.png',
        alt: 'default_avatar',
    },
    {
        id: 2,
        src: '/avatars/2.png',
        alt: 'default_avatar',
    },
    {
        id: 3,
        src: '/avatars/3.png',
        alt: 'default_avatar',
    },
    {
        id: 4,
        src: '/avatars/4.png',
        alt: 'default_avatar',
    },
    {
        id: 5,
        src: '/avatars/5.png',
        alt: 'default_avatar',
    },
    {
        id: 6,
        src: '/avatars/6.png',
        alt: 'default_avatar',
    },
    {
        id: 7,
        src: '/avatars/7.png',
        alt: 'default_avatar',
    },
    {
        id: 8,
        src: '/avatars/8.png',
        alt: 'default_avatar',
    },
    {
        id: 9,
        src: '/avatars/9.png',
        alt: 'default_avatar',
    },
]

export const NEW_CONTACTS_DEFAULT: TNewContactsDefault = [
    {
        id: 1,
        title: 'New Group',
        icon: <MdGroup className="cursor-pointer text-2xl" />,
    },
    {
        id: 2,
        title: 'New Comunity',
        icon: <MdGroups className="cursor-pointer text-2xl" />,
    },
]
