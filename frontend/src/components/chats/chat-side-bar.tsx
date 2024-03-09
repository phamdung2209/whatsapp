'use client'

import React from 'react'
import { IoClose } from 'react-icons/io5'
import { FaAngleRight } from 'react-icons/fa6'

import { Avatar, AvatarImage } from '../ui/avatar'
import HeaderActions from './header-bar'
import SearchBar from './search-bar'
import ListChats from './list-chats'
import { Whatsapp } from '~/assets/icons'
import './chats.scss'
import { Session } from 'next-auth'
import useConversation from '~/zustand/useConversation'

const ChatSidebar = ({ session }: { session: Session | null }) => {
    const { image } = session?.user ?? { image: '' }
    const { selectedConversation } = useConversation()

    return (
        <aside
            className={`chat-side-bar  ${
                !selectedConversation ? 'flex' : 'hidden'
            } md:flex min-w-80 md:flex-[1.3_1.3_0] bg-white flex-col w-full border-r border-mainColor relative max-h-[calc(100dvh)]`}
        >
            <header className="flex justify-between items-center bg-bgChat p-3 sticky">
                <Avatar className="cursor-pointer">
                    <AvatarImage src={image ?? ''} alt="" />
                </Avatar>

                <div className="flex items-center gap-5 text-xl text-[#54656f]">
                    <HeaderActions session={session} />
                </div>
            </header>

            <SearchBar />

            <ListChats session={session} />

            <footer className="absolute bottom-0 right-0 left-0 flex items-center justify-between p-3 py-4 border-t border-mainColor cursor-pointer transition-all duration-200 ease-in-out">
                <div className="flex items-center gap-3 w-full">
                    <Whatsapp />

                    <span className="text-tea text-[1.1rem] flex justify-center items-center w-fit">
                        Get WhatsApp for Windows <FaAngleRight />
                    </span>
                </div>

                <div className="flex items-center close-btn">
                    <span className="text-[#54656f] text-2xl">
                        <IoClose />
                    </span>
                </div>
            </footer>
        </aside>
    )
}

export default ChatSidebar
