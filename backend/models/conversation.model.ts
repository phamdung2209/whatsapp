import mongoose from 'mongoose'

export interface IConversationDocument extends mongoose.Document {
    participants: mongoose.Schema.Types.ObjectId[]
    messages: mongoose.Schema.Types.ObjectId[]
    createdAt: Date
    updatedAt: Date
}

const conversationSchema: mongoose.Schema = new mongoose.Schema<IConversationDocument>(
    {
        participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    },
    { timestamps: true },
)

const Converation: mongoose.Model<IConversationDocument> =
    mongoose.models?.Converation ?? mongoose.model('Converation', conversationSchema)
export default Converation
