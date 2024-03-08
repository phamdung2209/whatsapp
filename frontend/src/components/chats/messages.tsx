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
import { ScrollArea } from '../ui/scroll-area'
import { ArrowLeft } from 'lucide-react'

const Messages = () => {
    return (
        <div className="w-screen xs:w-full max-h-[calc(100dvh)] overflow-hidden flex flex-col justify-between">
            <header className="sticky top-0 flex justify-between items-center bg-bgChat p-2 w-full gap-0 xs:gap-4">
                <div className="flex items-center gap-2 md:gap-4">
                    <ArrowLeft className="block md:hidden cursor-pointer w-5" />

                    <Avatar className="sm:h-12 sm:w-12">
                        <AvatarImage
                            className="object-cover"
                            src="https://res.cloudinary.com/den0awox0/image/upload/v1709350109/qkaxk6xcztpxp8q95qt2.png"
                            alt=""
                        />
                    </Avatar>

                    <div className="flex flex-col justify-start text-nowrap w-auto">
                        <div className="text-colors-primary text-base truncate w-[70%] xs:w-fit">
                            Pham Van Dung
                        </div>
                        <div className="text-colors-secondary text-xs font-medium truncate w-[70%] xs:w-fit">
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
                        <div className="cursor-pointer sm:block hidden">
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

            <ScrollArea className="text-colors-primary py-2 px-3 [overflow-y:overlay] h-screen">
                {/* Message container */}
                <div className="flex flex-col">
                    <Message />
                </div>
            </ScrollArea>

            <SendMessages />
        </div>
    )
}

export default Messages
