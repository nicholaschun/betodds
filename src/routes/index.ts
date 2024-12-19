import express, { type Router } from 'express'
import config from '../config'
import bet from './bet'

const { baseUrl } = config
const router: Router = express.Router()


router.use(`${baseUrl}/bet`,  bet)

export default router