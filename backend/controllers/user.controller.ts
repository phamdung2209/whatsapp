import { Request, Response } from 'express'
import User, { IUserDocument } from '../models/user.model'

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users: IUserDocument[] = await User.find()
        if (!users) res.json({ error: 'Users not found' })

        res.json(users)
    } catch (error: any) {
        console.log('Error in getUsers controller', error.message)
        res.json({ error: error.message })
    }
}

export const getUserByEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.body
        const user: IUserDocument | null = await User.findOne({ email })
        if (!user) return res.json({ error: 'User not found' })

        res.json(user)
    } catch (error: any) {
        console.log('Error in getUserByEmail controller', error.message)
        res.json({ error: error.message })
    }
}
