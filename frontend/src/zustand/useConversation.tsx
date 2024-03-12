import { create } from 'zustand'
import { IUserDocument } from '~/types'

// const mess: TMessage = [
//     {
//         _id: '65ed71390aa81e0ad2f9f5c2',
//         senderId: {
//             _id: '65e5ef9b7655a30a1ad0c2b7',
//             fullname: 'dungpham',
//             avatar: 'https://res.cloudinary.com/den0awox0/image/upload/v1710059338/whatsapp/avatars/phamdung.09091998%40gmail.com/klgiqdo4norbwpnavuii.jpg',
//         },
//         receiverId: {
//             _id: '65e5f866f43789add841f48c',
//             fullname: 'Pham Van Dung',
//             avatar: 'https://res.cloudinary.com/den0awox0/image/upload/v1709825821/whatsapp/avatars/phamdung.22092003%40gmail.com/mmft2ssqdocmuxij1k25.png',
//         },
//         message: 'www',
//         messageType: 'text',
//         read: false,
//         delivered: false,
//         deleted: false,
//         createdAt: '2024-03-10T08:37:13.061Z',
//         updatedAt: '2024-03-10T08:37:13.061Z',
//     },
// ]

export type TMessage = {
    _id: string
    senderId: IUserDocument
    receiverId: IUserDocument
    message: string
    messageType: 'text' | 'image' | 'video' | 'audio' | 'file'
    read: boolean
    delivered: boolean
    deleted: boolean
    emoji: string
    createdAt: string
    updatedAt: string
}

const useConversation = create<{
    messages: TMessage[]
    setMessage: (messages: TMessage[]) => void

    selectedConversation: IUserDocument | null
    setSelectedConversation: (selectedConversation: IUserDocument | null) => void | null
}>((set) => ({
    messages: [],
    setMessage: (messages) => set({ messages }),

    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
}))

export default useConversation
