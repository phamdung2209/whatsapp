import { Session } from 'next-auth'
import { useEffect } from 'react'
import io from 'socket.io-client'

import useConversation, { TMessage } from '~/zustand/useConversation'

const useListenMessages = ({ session }: { session: Session | null }) => {
    const { messages, setMessage } = useConversation()
    console.log('messages', messages)

    const socket = io('http://localhost:8080', {
        query: {
            senderId: session?.user._id,
        },
    })
    console.log('messages-------------', messages)

    useEffect(() => {
        socket?.on('newMessage', (message: TMessage) => {
            setMessage([...messages, message])
        })

        return () => {
            // socket?.off('newMessage')
            socket?.disconnect()
        }
    }, [socket, messages, setMessage])
}

export default useListenMessages
