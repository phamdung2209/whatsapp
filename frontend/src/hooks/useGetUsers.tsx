'use client'

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
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
            toast.error(error.message)
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
