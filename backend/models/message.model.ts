import mongoose from 'mongoose'

export interface IMessageDocument extends mongoose.Document {
    senderId: mongoose.Schema.Types.ObjectId
    receiverId: mongoose.Schema.Types.ObjectId
    message: string
    messageType: 'text' | 'image' | 'video' | 'audio' | 'file'
    read: boolean
    delivered: boolean
    deleted: boolean
    createdAt: Date
    updatedAt: Date
}

const messageSchema: mongoose.Schema = new mongoose.Schema<IMessageDocument>(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        message: {
            type: String,
            required: true,
        },
        messageType: {
            type: String,
            enum: ['text', 'image', 'video', 'audio', 'file'],
            default: 'text',
        },
        read: {
            type: Boolean,
            default: false,
        },
        delivered: {
            type: Boolean,
            default: false,
        },
        deleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
)

const Message: mongoose.Model<IMessageDocument> =
    mongoose.models?.Message ?? mongoose.model('Message', messageSchema)
export default Message
