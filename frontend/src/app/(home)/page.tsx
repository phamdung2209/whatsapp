'use client'

import Image from 'next/image'
import React from 'react'

import { Lock } from '~/assets/icons'
import Messages from '~/components/chats/messages'
import { Button } from '~/components/ui/button'
import useConversation from '~/zustand/useConversation'

const Home = () => {
    const { selectedConversation, setSelectedConversation, messages } = useConversation()
    console.log('messages', messages)

    return (
        <div
            className={`flex flex-[3_3_0] bg-[#f0f2f5] [height:unset] max-h-[calc(100dvh)] overflow-hidden ${
                selectedConversation &&
                'bg-bg-chat bg-fixed bg-center h-full left-0 top-0 z-0 bg-[#EFEAE2]'
            }`}
        >
            {selectedConversation ? (
                <Messages
                    selectedConversation={selectedConversation}
                    setSelectedConversation={setSelectedConversation}
                />
            ) : (
                <div className="h-screen hidden md:flex flex-col items-center justify-center mx-auto max-w-xl gap-7">
                    <Image
                        priority
                        src={'/images/desktop-hero.png'}
                        alt=""
                        width={320}
                        height={188}
                    />
                    <div className="flex flex-col items-center justify-center gap-7 text-center">
                        <h1 className="text-4xl font-extralight text-colors-primary">
                            Download WhatsApp for Windows
                        </h1>
                        <div className="text-sm font-normal text-[#667781] text-center">
                            Make calls, share your screen and get a faster experience when you
                            download the Windows app.
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

export default Home
