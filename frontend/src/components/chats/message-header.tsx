import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import Tippy from '@tippyjs/react'
import { MdCall } from 'react-icons/md'
import { IoVideocam } from 'react-icons/io5'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IUserDocument } from '~/types'

const MessageHeader = ({
    selectedConversation,
    setSelectedConversation,
    isOnline,
}: {
    selectedConversation: IUserDocument
    setSelectedConversation: (selectedConversation: IUserDocument | null) => void | null
    isOnline: boolean
}) => {
    return (
        <header className="sticky top-0 flex justify-between items-center bg-bgChat p-2 w-full gap-0 xs:gap-4">
            <div className="flex items-center gap-2 md:gap-4 cursor-pointer messages-info">
                <ArrowLeft
                    className="block md:hidden cursor-pointer w-5"
                    onClick={() => setSelectedConversation(null)}
                />

                <Avatar className="sm:h-12 sm:w-12">
                    <AvatarImage
                        className="object-cover"
                        src={selectedConversation?.avatar ?? '/images/avatar.png'}
                        alt=""
                    />
                </Avatar>

                <div className="flex flex-col justify-start text-nowrap w-auto">
                    <div className="text-colors-primary text-base truncate w-[119px] xs:w-fit">
                        {selectedConversation?.fullname ?? selectedConversation?.username}
                    </div>
                    <div className="messages-status relative flex items-center text-colors-secondary text-xs font-medium truncate w-[119px] xs:w-fit">
                        <div className="messages-username h-fit">
                            {selectedConversation?.username}
                        </div>
                        <div className="status h-fit absolute">
                            {isOnline ? 'Online' : 'Offline'}
                        </div>
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
    )
}

export default MessageHeader
