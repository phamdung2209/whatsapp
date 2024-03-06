'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { IUserDocument } from '~/types'
import request from '~/ultils/httpRequest.config'

const useGetUsers = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [users, setUsers] = useState<IUserDocument[]>([])

    const fetchUsers = async () => {
        setLoading(true)
        try {
            const users: any = await request.get('/api/users')
            if (users.error) throw new Error(users.error)
            setUsers(users)
            console.log('users: ', users)
        } catch (error: any) {
            console.log('Error in fetchUsers', error.message)
            toast.error(error.message, {
                description: 'Error fetching users',
                duration: 5000,
                position: 'top-right',
                icon: '😭',
                action: {
                    label: 'Close',
                    onClick: () => console.log('closed'),
                },
            })
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return { loading, users }
}

export default useGetUsers
