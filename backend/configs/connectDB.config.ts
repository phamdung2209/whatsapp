import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI as string)
        console.log('Connected to DB')
    } catch (error: any) {
        console.log('Error in connecting to DB: ', error.message)
    }
}
