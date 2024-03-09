import { create } from 'zustand'
import { IUserDocument } from '~/types'

type TMessage = {
    id: string
    message: string
    sender: string
    receiver: string
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
