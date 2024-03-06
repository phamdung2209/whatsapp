'use client'

import Tippy from '@tippyjs/react'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import 'tippy.js/dist/tippy.css'

import { Channels, Communities, NewChat, Status } from '~/assets/icons'

const HeaderActions = () => {
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
            <Tippy placement="bottom" content="NewChat">
                <NewChat className="cursor-pointer" />
            </Tippy>
            <BsThreeDotsVertical className="cursor-pointer" />
        </>
    )
}

export default HeaderActions
