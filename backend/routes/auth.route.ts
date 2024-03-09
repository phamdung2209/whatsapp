import express from 'express'
import { authMe, signup } from '../controllers/auth.controller'

const router = express.Router()

router.post('/sign-up', signup)
router.post('/me', authMe)

export default router
