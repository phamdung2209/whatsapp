'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { IUserDocument } from '~/types'
import * as request from '~/ultils/httpRequest.config'

const useGetContacts = ({ authId }: { authId: string }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [contacts, setContacts] = useState<{ [key: string]: IUserDocument[] }>({})

    useEffect(() => {
        const getContacts = async () => {
            setLoading(true)
            try {
                const data = await request.get(`/api/users/get-contacts/${authId}`)
                if (data.error) {
                    throw new Error(data.error)
                }
                setContacts(data)
            } catch (error: any) {
                console.log('Error in getContacts controller: (user.controller.ts) ', error.message)
                toast.error(error.message, {
                    description: 'Error in getContacts controller',
                    duration: 5000,
                    icon: '😭',
                    position: 'top-right',
                    action: {
                        label: 'Close',
                        onClick: () => console.log('closed'),
                    },
                })
            } finally {
                setLoading(false)
            }
        }

        getContacts()
    }, [authId])

    return { loading, contacts }
}

export default useGetContacts
