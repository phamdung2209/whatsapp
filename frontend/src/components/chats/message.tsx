import React, { useEffect, useRef } from 'react'
import { Expand, Tick } from '~/assets/icons'
import { Session } from 'next-auth'

import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import useGetmessages from '~/hooks/useGetmessages'
import useListenMessages from '~/hooks/useListenMessages'
import { extractTime, getRandomEmoji } from '~/lib/utils'

const Message = ({ session }: { session: Session | null }) => {
    const { loading, messages } = useGetmessages({ authId: session?.user?._id ?? '' })
    useListenMessages({ session })

    const lastMsgRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const idTimer = setTimeout(() => {
            lastMsgRef.current?.scrollIntoView({ behavior: 'smooth' })
        }, 400)

        return () => clearTimeout(idTimer)
    }, [messages])

    if (messages.length === 0) {
        return (
            <div className="flex flex-col items-center h-full justify-center gap-6">
                <div className="uppercase text-colors-secondary text-xs p-2 bg-white w-fit shadow-sm rounded-md">
                    yesterday
                </div>

                <div className="p-2 px-4 bg-white flex items-center flex-col justify-center gap-5 w-fit shadow-sm rounded-md">
                    <div className="flex items-center justify-center flex-col gap-2 text-center">
                        <Avatar>
                            <AvatarImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </Avatar>
                        <h3 className="text-colors-primary font-medium">
                            Welcome to your community!
                        </h3>
                        <p className="text-colors-secondary text-sm">
                            Send important admin updates to all your members at once.
                        </p>
                    </div>

                    <Button className="bg-transparent w-full text-tea hover:bg-transparent">
                        Manage community
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="message select-text flex flex-col gap-3">
                {messages.map((message) => (
                    <div
                        key={message._id}
                        ref={lastMsgRef}
                        className={`message-chat flex flex-col ${
                            session?.user._id === message.senderId._id ? 'items-end' : 'items-start'
                        } justify-center gap-1 text-sm`}
                    >
                        <div className="flex flex-col justify-center bg-[#D9FDD3] p-3 rounded-xl shadow-lg break-words max-w-[70%] gap-2">
                            <div className="flex items-start gap-3 relative">
                                <Avatar>
                                    <AvatarImage src={message.senderId.avatar} alt="" />
                                </Avatar>
                                <div className="w-fit flex flex-col justify-center text-colors-secondary text-[13px]">
                                    <div className="font-medium text-[#06cf9c] flex items-center gap-1">
                                        {message.senderId.fullname ?? message.senderId.username}
                                        {session?.user._id === message.senderId._id && (
                                            <p className="text-colors-secondary text-xs">(ME)</p>
                                        )}
                                        {message.senderId.emoji ?? null}
                                    </div>
                                    <div className="font-normal">@{message.senderId.username}</div>
                                </div>
                                <div className="expand cursor-pointer absolute right-0 text-xl text-colors-secondary size-9 flex items-center justify-center shadow-2xl">
                                    <Expand className="shadow-[1px_1px_red-50]" />
                                </div>
                            </div>

                            <div className="w-full text-colors-primary">{message.message}</div>
                            <div className="flex justify-end items-center text-colors-secondary text-xs gap-1">
                                {extractTime(message.updatedAt)} <Tick />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Message
