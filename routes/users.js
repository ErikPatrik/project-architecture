import express from 'express'
//import { v4 as uuidv4 } from 'uuid'
import {
    getUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser,
} from '../controllers/users.js'

const router = express.Router()

// all routes starting with users
router.get('/', getUsers)
router.post('/', createUser)
router.get('/:id', getUserById)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

// const createUser = (req, res) => {
//     const user = req.body
//     users.push({ ...user, id: uuidv4() })
//     res.send('User add!')
// }

export default router
