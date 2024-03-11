import React, { useEffect, useRef } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import useGetmessages from '~/hooks/useGetmessages'
import { Session } from 'next-auth'
import { isLinkUrl } from '~/lib/utils'

const Message = ({ session }: { session: Session | null }) => {
    const { loading, messages } = useGetmessages({ authId: session?.user?._id ?? '' })
    console.log('messages: ======', messages)

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
            <div className="select-text">
                <div className="flex gap-2 items-end">
                    <Avatar>
                        <AvatarImage src={messages[0].receiverId.avatar} alt="" />
                    </Avatar>
                    <div className="flex flex-col items-start justify-center gap-1 rounded-3xl overflow-hidden text-sm text-colors-primary">
                        <div className="px-4 py-2 text-start bg-[#D9FDD3] rounded-e-3xl max-w-[70%] break-words">
                            https://vcdn-sohoa.vnecdn.net/2020/05/01/Mark-Zuckerberg-Vnexpress-3987-1588325634.jpg
                        </div>
                        <div className="px-4 py-2 text-start bg-[#D9FDD3] rounded-e-3xl max-w-[70%] break-words">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni tempore
                            eaque facilis nobis ipsam harum voluptatibus! Exercitationem, obcaecati
                            perspiciatis dolor illo deserunt adipisci, eius suscipit, voluptates
                            fuga autem cupiditate minus!
                        </div>
                        <div className="px-4 py-2 text-start bg-[#D9FDD3] rounded-e-3xl max-w-[70%] break-words">
                            ok
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-end justify-center gap-1 rounded-3xl overflow-hidden text-sm text-colors-primary">
                    <div className="px-4 py-2 text-start bg-[#D9FDD3] rounded-s-3xl max-w-[70%] break-words">
                        hehehe
                    </div>
                    <div className="px-4 py-2 text-start bg-[#D9FDD3] rounded-s-3xl max-w-[70%] break-words">
                        ok
                    </div>

                    <div className="px-4 py-2 text-start bg-[#D9FDD3] rounded-s-3xl max-w-[70%] break-words">
                        ok
                    </div>
                </div>

                {/* {messages.map((message) => (
                    <div
                        ref={lastMsgRef}
                        key={message._id}
                        className={`flex mt-1 flex-col items-${
                            session?.user._id === message.senderId._id ? 'end' : 'start'
                        } justify-center overflow-hidden text-sm text-colors-primary`}
                    >
                        <div
                            className={`px-4 py-2 text-start bg-[#D9FDD3] rounded-${
                                session?.user._id === message.senderId._id ? 's' : 'e'
                            }-3xl max-w-[70%] break-words`}
                        >
                            {message.message}
                        </div>
                    </div>
                ))} */}

                <div className="w-full flex justify-end  mt-1 mb-2">
                    <Avatar className="h-[14px] w-[14px]">
                        <AvatarImage
                            src={messages[0].receiverId.avatar}
                            alt=""
                            className="w-full h-full object-cover"
                        ></AvatarImage>
                    </Avatar>
                </div>
                <div className="text-end text-colors-secondary text-xs my-1">Sent 6m ago</div>
            </div>
        </>
    )
}

export default Message
