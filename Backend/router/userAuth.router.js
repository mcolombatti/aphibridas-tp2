import express from 'express'
import authUserController from '../controller/authUser.controller.js'
import { validator } from '../middleware/validatorToken.js'
const route = express.Router()

route.post('/register', authUserController.register)
route.post('/login', authUserController.login)
route.get('/login', [validator], authUserController.obtainLogin)

route.get('/', [validator], authUserController.findAll)

export default route