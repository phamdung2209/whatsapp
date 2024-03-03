import express from 'express'
import { getUserByEmail, getUsers } from '../controllers/user.controller'

const router = express.Router()

router.get('/', getUsers)
router.post('/get-by-email', getUserByEmail)

export default router
