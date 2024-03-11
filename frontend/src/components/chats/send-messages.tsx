import React, { useRef, useState } from 'react'
import Tippy from '@tippyjs/react'
import { useFormState, useFormStatus } from 'react-dom'
import { FaCirclePlus } from 'react-icons/fa6'

import { Emotion, Micro, Send } from '~/assets/icons'
import { IUserDocument } from '~/types'
import { sendMessagesAction } from '~/lib/actions'
import { Loader2 } from 'lucide-react'
import { revalidatePath } from 'next/cache'

const SendMessages = ({ selectedConversation }: { selectedConversation: IUserDocument }) => {
    const [message, setMessage] = useState<string>('')
    const messageRef = useRef<HTMLInputElement | null>(null)

    const [messageError, dispatch] = useFormState(() => {
        sendMessagesAction(selectedConversation._id, message, 'text')
        setMessage('')
        messageRef.current?.focus()
    }, '' || null)

    return (
        <form
            action={dispatch}
            className="send-messages text-colors-primary md:gap-6 gap-2 flex justify-between items-center bg-bgChat py-1 sm:px-4 px-1 h-16 xs:w-full max-h-36 sticky bottom-0"
        >
            <Tippy content="Attach">
                <div className="cursor-pointer md:text-lg text-base">
                    <FaCirclePlus className="" />
                </div>
            </Tippy>

            <label className="input input-bordered flex items-center bg-white rounded-lg py-1 lg:py-[9px] px-3 w-full gap-5">
                <Emotion className="text-colors-secondary cursor-pointer md:w-5 w-4" />

                <input
                    type="text"
                    spellCheck="false"
                    autoComplete="off"
                    autoFocus={true}
                    className="block overflow-y-scroll grow font-normal text-sm focus:outline-none bg-transparent max-w-full"
                    placeholder="Type a message"
                    value={message}
                    ref={messageRef}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (!e.target.value.startsWith(' ')) {
                            setMessage(e.target.value)
                        }
                    }}
                />
            </label>

            {message ? (
                <ButtonSendMessage />
            ) : (
                <Micro className="cursor-pointer btn-micro min-w-5 w-5 h-5 md:w-6 md:h-6" />
            )}
        </form>
    )
}

export default SendMessages

const ButtonSendMessage = () => {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            className="outline-none border-none text-center w-fit"
        >
            {pending ? (
                <Loader2 className="animate-spin min-w-4 w-4 h-4 md:w-5 md:h-5" />
            ) : (
                <Send className="cursor-pointer btn-send min-w-4 w-4 h-4 md:w-5 md:h-5" />
            )}
        </button>
    )
}
