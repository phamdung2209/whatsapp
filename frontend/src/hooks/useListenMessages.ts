import { Session } from 'next-auth'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'

import useConversation, { TMessage } from '~/zustand/useConversation'

const useListenMessages = ({ session }: { session: Session | null }) => {
    const { messages, setMessage } = useConversation()
    const [isRinging, setIsRinging] = useState<boolean>(false)

    useEffect(() => {
        const notificationSound = new Audio(
            'https://tiengdong.com/wp-content/uploads/Discord-notification-sound-effect-www_tiengdong_com.mp3?_=1',
        )

        const socket = io(process.env.NEXT_PUBLIC_SERVER_URL!, {
            query: {
                senderId: session?.user._id,
            },
        })

        socket?.on('newMessage', (newMessage: TMessage) => {
            // console.log('newMessage', newMessage)
            if (isRinging) {
                notificationSound.play()
            }
            setMessage([...messages, newMessage])
        })

        const handleChangView = () => {
            if (document.visibilityState === 'hidden') {
                setIsRinging(true)
            } else {
                setIsRinging(false)
            }
        }
        window.addEventListener('visibilitychange', handleChangView)

        window.onbeforeunload = () => {
            socket?.disconnect()
            window.removeEventListener('visibilitychange', handleChangView)
        }

        return () => {
            socket?.off('newMessage')
        }
    }, [session?.user._id, messages, setMessage, isRinging])
}

export default useListenMessages
