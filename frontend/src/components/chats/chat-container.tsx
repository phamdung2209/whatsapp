'use client'

import Image from 'next/image'
import { Session } from 'next-auth'

import Messages from './messages'
import useConversation from '~/zustand/useConversation'
import { Button } from '../ui/button'
import { Lock } from '~/assets/icons'
import { useEffect, useMemo } from 'react'
import { io } from 'socket.io-client'

const ChatContainer = ({ session }: { session: Session | null }) => {
    const { selectedConversation, setSelectedConversation, userOnline, setUserOnline } = useConversation()

    useEffect(() => {
        const socket = io(process.env.NEXT_PUBLIC_SERVER_URL!, {
            query: {
                senderId: session?.user._id,
            },
        })

        socket?.on('getOnlineUsers', (onlineUser: string[]) => {
            setUserOnline(onlineUser)
        })

        return () => {
            socket.disconnect()
        }
    }, [session?.user._id, setUserOnline])

    const isOnline: boolean = useMemo(() => {
        return userOnline.includes(selectedConversation?._id ?? '')
    }, [selectedConversation?._id, userOnline])
    return (
        <div
            className={`flex flex-[3_3_0] bg-[#f0f2f5] [height:unset] max-h-[calc(100dvh)] overflow-hidden ${
                selectedConversation && 'bg-bg-chat bg-fixed bg-center h-full left-0 top-0 z-0 bg-[#EFEAE2]'
            }`}
        >
            {selectedConversation ? (
                <Messages
                    selectedConversation={selectedConversation}
                    setSelectedConversation={setSelectedConversation}
                    session={session}
                    isOnline={isOnline}
                />
            ) : (
                <div className="h-screen hidden md:flex flex-col items-center justify-center mx-auto max-w-xl gap-7">
                    <Image priority src={'/images/desktop-hero.png'} alt="" width={320} height={188} />
                    <div className="flex flex-col items-center justify-center gap-7 text-center">
                        <h1 className="text-4xl font-extralight text-colors-primary">Download WhatsApp for Windows</h1>
                        <div className="text-sm font-normal text-[#667781] text-center">
                            Make calls, share your screen and get a faster experience when you download the Windows app.
                        </div>
                        <Button className="text-white font-semibold px-6 text-sm bg-tea rounded-3xl hover:bg-[#017561]">
                            Get from Microsoft Store
                        </Button>
                    </div>
                    <div className="text-colors-secondary text-sm flex items-center">
                        <Lock />
                        Your personal messages are end-to-end encrypted
                    </div>
                </div>
            )}
        </div>
    )
}

export default ChatContainer
