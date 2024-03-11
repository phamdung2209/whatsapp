import { Request, Response } from 'express'
import Converation, { IConversationDocument } from '../models/conversation.model'
import Message, { IMessageDocument } from '../models/message.model'
import User, { IUserDocument } from '../models/user.model'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const sendMessages = async (req: Request, res: Response) => {
    try {
        const { id: receiverId } = req.params
        let {
            message,
            senderId,
            messageType,
        }: {
            message: string
            senderId: string
            messageType: 'text' | 'image' | 'video' | 'audio' | 'file'
        } = req.body

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
            messageType,
            read: false,
            delivered: false,
            deleted: false,
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

export const getMessages = async (req: Request, res: Response) => {
    try {
        const { receiverId } = req.params
        const { senderId }: { senderId: string } = req.body

        const otherUser: IUserDocument | null = await User.findById(receiverId)
        const authUser: IUserDocument | null = await User.findById(senderId)

        // compare receiverId and senderId
        if (senderId === receiverId) {
            return res.json({ error: 'You cannot send message to yourself' })
        }

        if (!authUser || !otherUser) {
            return res.json({ error: 'Missing id user' })
        }

        const converation: IConversationDocument | null = await Converation.findOne({
            participants: { $all: [receiverId, senderId] },
        }).populate({
            path: 'messages',
            populate: [
                {
                    path: 'senderId',
                    model: 'User',
                    select: '_id fullname avatar',
                },
                {
                    path: 'receiverId',
                    model: 'User',
                    select: '_id fullname avatar',
                },
            ],
        })

        if (!converation) {
            return res.json({
                data: [],
                meta: {
                    pagination: {
                        total: 0,
                        count: 0,
                        per_page: 0,
                        current_page: 0,
                        total_pages: 0,
                        links: {
                            next: null,
                        },
                    },
                },
            })
        }

        res.json({
            data: converation.messages,
            meta: {
                pagination: {
                    total: converation.messages.length,
                    count: converation.messages.length,
                    per_page: 0,
                    current_page: 0,
                    total_pages: 0,
                    links: {
                        next: null,
                    },
                },
            },
        })
    } catch (error: any) {
        console.log('Error in getMessages: (message.controller.ts)', error.message)
        res.json({ error: error.message })
    }
}
