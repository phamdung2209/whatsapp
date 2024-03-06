import React from 'react'
import ChatSidebar from '~/components/chats/chat-side-bar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="h-screen flex flex-row xl:border-[25px] bg-[#e9edef] border-[#D5D8D9] min-h-[512px] [overflow-y:overlay]">
            <ChatSidebar />
            {children}
        </main>
    )
}

export default Layout
