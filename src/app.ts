import express from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import router from './routes/index.routes'

dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

export default app
