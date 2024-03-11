'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import * as request from '~/ultils/httpRequest.config'
import useConversation from '~/zustand/useConversation'

const useGetmessages = ({ authId }: { authId: string }) => {
    const [loading, setLoading] = useState<boolean>(true)
    const { messages, setMessage, selectedConversation } = useConversation()

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)

            try {
                const res = await request.post(`/api/messages/${selectedConversation?._id}`, {
                    senderId: authId,
                })

                if (res.error) {
                    throw new Error(res.error)
                }
                console.log('res.data: ', res)

                setMessage(res.data)
            } catch (error: any) {
                console.log('Error in getMessages (useGetmessages.tsx): ', error.message)
                toast.error(error.message, {
                    description: 'Error get messages',
                    position: 'top-right',
                    duration: 5000,
                    icon: '😵‍💫',
                    action: {
                        label: 'Close',
                        onClick: () => console.log('closed'),
                    },
                })
            } finally {
                setLoading(false)
            }
        }

        getMessages()

        return () => {
            setMessage([])
        }
    }, [selectedConversation?._id, authId, setMessage])

    return { loading, messages }
}

export default useGetmessages
