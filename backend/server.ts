import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import authRoutes from './routes/auth.route'
import userRoutes from './routes/user.route'
import messageRoutes from './routes/message.route'
import { connectDB } from './configs/connectDB.config'
import { app, server } from './socket/socket'

dotenv.config()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT ?? 8080

connectDB()

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Hello World',
    })
})
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/messages', messageRoutes)

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
