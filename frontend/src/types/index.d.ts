export interface IUserDocument {
    _id: string
    username: string
    email: string
    fullname?: string
    avatar?: string
    provider: string
    createdAt: Date
    updatedAt: Date
}

export interface IMessageType {
    text: 'text'
    image: 'image'
    video: 'video'
    audio: 'audio'
    file: 'file'
}

export interface IMessageDocument {
    _id: string
    sender: IUserDocument
    receiver: IUserDocument
    message: string
    messageType: IMessageType['text' | 'image' | 'video' | 'audio' | 'file']
    createdAt: Date
    updatedAt: Date
}
