import express from 'express'
import { getUserByEmail, getUsers, updateUser, getContacts } from '../controllers/user.controller'
import protectRoute from '../middleware/protectRoute'

const router = express.Router()

router.get('/', protectRoute, getUsers)
router.post('/get-by-email', getUserByEmail)
router.post('/update/:userId', updateUser)
router.get('/get-contacts/:authId', getContacts)

export default router
