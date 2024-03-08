import { create } from 'zustand'

type TMessage = {
    id: string
    message: string
    sender: string
    receiver: string
}

const useConversation = create<{
    messages: TMessage[]
    addMessage: (messages: TMessage[]) => void
}>((set) => ({
    messages: [],
    addMessage: (messages) => set({ messages }),
}))

export default useConversation
