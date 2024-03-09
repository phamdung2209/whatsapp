'use client'

import Tippy from '@tippyjs/react'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import 'tippy.js/dist/tippy.css'
import GetContacts from './get-contacts'

import { Channels, Communities, NewChat, Status } from '~/assets/icons'
import { Session } from 'next-auth'

const HeaderActions = ({ session }: { session: Session | null }) => {
    return (
        <>
            <Tippy placement="bottom" content="Communities">
                <Communities className="cursor-pointer" />
            </Tippy>
            <Tippy placement="bottom" content="Status">
                <Status className="cursor-pointer" />
            </Tippy>
            <Tippy placement="bottom" content="Channels">
                <Channels className="cursor-pointer" />
            </Tippy>
            <Tippy placement="bottom" content="New Chat">
                <div className="flex items-center justify-center">
                    <GetContacts session={session}>
                        <NewChat className="cursor-pointer" />
                    </GetContacts>
                </div>
            </Tippy>
            <BsThreeDotsVertical className="cursor-pointer" />
        </>
    )
}

export default HeaderActions
