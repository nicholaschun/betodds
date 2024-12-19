import dotenv from 'dotenv'
import express, { type Application } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import initializeSentry from './utils/sentry'
import routes from './routes'
import appLogger from './utils/app-logger'
dotenv.config()
const app: Application = express()

initializeSentry(process.env.SENTRY_DSN || '')

app.use(cors())
app.use(appLogger)
app.use(bodyParser.json())

app.use(routes)

export default app