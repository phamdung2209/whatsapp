'use client'

import { Session } from 'next-auth'
import React, { memo } from 'react'
import useGetContacts from '~/hooks/useGetContacts'

const ListChats = ({ session }: { session: Session | null }) => {
    const data: boolean = false
    const contacts = useGetContacts({ authId: session?.user?._id ?? '' })

    if (!data) {
        return (
            <div className="text-colors-secondary font-normal text-sm flex items-center justify-center mx-auto h-full">
                No chats
            </div>
        )
    }

    return <div>ListChats</div>
}

export default memo(ListChats)
