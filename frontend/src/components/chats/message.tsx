import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import useGetmessages from '~/hooks/useGetmessages'
import { Session } from 'next-auth'

const Message = ({ session }: { session: Session | null }) => {
    const { loading, messages } = useGetmessages({ authId: session?.user?._id ?? '' })
    console.log('messages: ', messages)

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
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        />
                    </div>
                </div>
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Delivered</div>
            </div>
        </>
    )
}

export default Message
