import express from 'express'
import { sendMessages, getMessages } from '../controllers/message.controller'

const router = express.Router()

router.post('/send/:id', sendMessages)
router.post('/:receiverId', getMessages)

export default router
