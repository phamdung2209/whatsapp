import express from 'express'
import { getUserByEmail, getUsers, updateUser } from '../controllers/user.controller'

const router = express.Router()

router.get('/', getUsers)
router.post('/get-by-email', getUserByEmail)
router.post('/update/:userId', updateUser)

export default router
