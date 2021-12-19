import express from 'express'
import userAuthRouter from './router/userAuth.router.js'
import empleadosApiRouter from './router/empleadosApi.router.js'
import beneficiosApiRouter from './router/beneficiosApi.router.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use('/user', userAuthRouter)

app.use("/api/empleados", empleadosApiRouter);
app.use("/api/beneficios", beneficiosApiRouter);
//app.use("/home", pageRouter); 

app.listen(9001, function () {
})
