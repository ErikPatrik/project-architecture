import { v4 as uuidv4 } from 'uuid'

let users = []

export const getUsers = (req, res) => {
    try {
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const createUser = (req, res) => {
    const user = req.body

    users.push({ ...user, id: uuidv4() })
    res.send('User add!')
}

export const getUserById = (req, res) => {
    const { id } = req.params

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const { id } = req.params

    users = users.filter((user) => user.id !== id)

    res.send('User deleted!')
}

export const updateUser = (req, res) => {
    const { id } = req.params
    const { firstName, lastName, age } = req.body

    const user = users.find((user) => user.id === id)

    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName
    if (age) user.age = age

    res.send('User updated!')
}
