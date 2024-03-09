import React from 'react'
import { auth } from '~/auth'
import ChatSidebar from '~/components/chats/chat-side-bar'

const Layout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth()

    return (
        <main className="select-none h-[calc(100dvh)] flex flex-row xl:border-[25px] bg-[#e9edef] border-[#D5D8D9] min-h-[512px] max-[316px]:overflow-auto overflow-hidden">
            <ChatSidebar session={session} />
            {children}
        </main>
    )
}

export default Layout
