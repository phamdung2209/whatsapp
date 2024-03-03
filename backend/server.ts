import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import authRoutes from './routes/auth.route'
import userRoutes from './routes/user.route'
import { connectDB } from './configs/connectDB.config'

const app = express()

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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
