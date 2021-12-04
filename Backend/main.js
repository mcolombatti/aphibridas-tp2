import express from 'express'
import userAuthRouter from './router/userAuthRouter.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/user', userAuthRouter)

app.listen(9001, function(){ 
})
