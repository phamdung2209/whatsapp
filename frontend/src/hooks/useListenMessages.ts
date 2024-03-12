import { Session } from 'next-auth'
import { useEffect } from 'react'
import io from 'socket.io-client'

import useConversation, { TMessage } from '~/zustand/useConversation'

const useListenMessages = ({ session }: { session: Session | null }) => {
    const { messages, setMessage } = useConversation()

    useEffect(() => {
        const socket = io('http://localhost:8080', {
            query: {
                senderId: session?.user._id,
            },
        })

        socket?.on('newMessage', (newMessage: TMessage) => {
            console.log('newMessage', newMessage)

            const notificationSound = new Audio(
                'https://tiengdong.com/wp-content/uploads/Discord-notification-sound-effect-www_tiengdong_com.mp3?_=1',
            )
            notificationSound.play()
            setMessage([...messages, newMessage])
        })

        return () => {
            socket?.off('newMessage')
        }
    }, [messages, setMessage, session?.user._id])
}

export default useListenMessages
