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
