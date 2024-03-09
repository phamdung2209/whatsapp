import express from 'express'
import { sendMessages } from '../controllers/message.controller'

const router = express.Router()

router.post('/send/:id', sendMessages)

export default router
