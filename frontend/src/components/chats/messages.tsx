'use client'

import React from 'react'
import Tippy from '@tippyjs/react'

import { Avatar, AvatarImage } from '../ui/avatar'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoVideocam } from 'react-icons/io5'
import { MdCall } from 'react-icons/md'
import { BiSearchAlt2 } from 'react-icons/bi'
import Message from './message'
import SendMessages from './send-messages'

const Messages = () => {
    return (
        <div className="w-full relative">
            <header className="flex justify-between items-center bg-bgChat p-2 w-full">
                <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                        <AvatarImage
                            className="object-cover"
                            src="https://res.cloudinary.com/den0awox0/image/upload/v1709350109/qkaxk6xcztpxp8q95qt2.png"
                            alt=""
                        />
                    </Avatar>

                    <div className="flex flex-col justify-start">
                        <div className="text-colors-primary text-base">Pham Van Dung</div>
                        <div className="text-colors-secondary text-xs font-medium">
                            Announcements
                        </div>
                    </div>
                </div>

                <div className="text-colors-primary text-xl flex items-center gap-5">
                    <Tippy placement="bottom" content="Call now">
                        <div className="cursor-pointer">
                            <MdCall />
                        </div>
                    </Tippy>
                    <Tippy placement="bottom" content="Call with camera">
                        <div className="cursor-pointer">
                            <IoVideocam />
                        </div>
                    </Tippy>
                    <Tippy placement="bottom" content="Search Messages">
                        <div className="cursor-pointer">
                            <BiSearchAlt2 />
                        </div>
                    </Tippy>
                    <Tippy placement="bottom" content="More">
                        <div className="cursor-pointer">
                            <BsThreeDotsVertical />
                        </div>
                    </Tippy>
                </div>
            </header>

            <Message />

            <SendMessages />
        </div>
    )
}

export default Messages
