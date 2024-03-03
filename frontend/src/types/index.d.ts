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
