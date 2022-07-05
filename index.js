import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import usersRouters from './routes/users.js'

//
dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const PORT = process.env.HOST_PORT || 3000
const corsOptions = { credentials: true, origin: process.env.URL || '*' }

app.use(cors(corsOptions))
app.use(bodyparser.json())
app.use(cookieParser())

//app.use('/', express.static(join(__dirname, 'public')))

app.use('/users', usersRouters)

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
