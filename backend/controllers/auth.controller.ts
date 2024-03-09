import { Request, Response } from 'express'
import User, { IUserDocument } from '../models/user.model'

export const signup = async (req: Request, res: Response) => {
    try {
        const { username, email, fullname, avatar, provider } = req.body
        console.log('req.body: ', req.body)

        if (!username || !email) {
            return res.json({ error: 'Username and email are required' })
        }

        const user: IUserDocument | null = await User.findOne({ email })
        if (user) return res.json({ error: 'Email is already taken' })

        const newUser: IUserDocument = await User.create({
            username,
            email,
            fullname,
            avatar,
            provider,
        })

        newUser.save()

        res.json({ message: 'Signup success' })
    } catch (error: any) {
        console.log('Error in signup controller', error.message)
        res.json({ error: error.message })
    }
}

export const authMe = async (req: Request, res: Response) => {
    try {
        const { email } = req.body
        const user: IUserDocument | null = await User.findOne({ email })
        if (!user) res.json({ error: 'User not found' })

        res.json(user)
    } catch (error: any) {
        console.log('Error in authMe controller', error.message)
        res.json({ error: error.message })
    }
}
