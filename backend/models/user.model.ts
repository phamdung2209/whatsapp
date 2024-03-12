import mongoose, { models } from 'mongoose'

export interface IUserDocument extends mongoose.Document {
    username: string
    email: string
    fullname?: string
    avatar?: string
    provider: string
    emoji?: string
    createdAt: Date
    updatedAt: Date
}

const userSchema = new mongoose.Schema<IUserDocument>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        fullname: {
            type: String,
            default: '',
            trim: true,
        },
        avatar: {
            type: String,
            default: '',
        },
        provider: {
            type: String,
            default: 'github' || 'google',
        },
        emoji: {
            type: String,
            default: '',
        },
    },
    {
        timestamps: true,
    },
)

const User: mongoose.Model<IUserDocument> = models?.User ?? mongoose.model('User', userSchema)
export default User
