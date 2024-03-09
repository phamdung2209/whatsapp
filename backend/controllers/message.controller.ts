import { Request, Response } from 'express'
import Converation, { IConversationDocument } from '../models/conversation.model'
import Message, { IMessageDocument } from '../models/message.model'
import User, { IUserDocument } from '../models/user.model'

export const sendMessages = async (req: Request, res: Response) => {
    try {
        const { id: receiverId } = req.params
        const { message, senderId } = req.body

        const receiver: IUserDocument | null = await User.findById(receiverId)
        const sender: IUserDocument | null = await User.findById(senderId)

        if (!receiver || !sender) {
            return res.json({ error: 'User not found' })
        }

        let converation: IConversationDocument | null = await Converation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        if (!converation) {
            converation = await Converation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage: IMessageDocument = new Message({
            senderId,
            receiverId,
            message,
        })

        if (newMessage) {
            converation.messages.push(newMessage._id)
        }

        Promise.all([newMessage.save(), converation.save()])

        res.json({ message: 'Message sent' })
    } catch (error: any) {
        console.log('Error in sendMessages: (message.controller.ts)', error.message)
        res.json({ error: error.message })
    }
}
