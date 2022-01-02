import express from 'express'
import userAuthRouter from './router/userAuth.router.js'
import empleadosApiRouter from './router/empleadosApi.router.js'
import beneficiosApiRouter from './router/beneficiosApi.router.js'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path';
const __dirname = path.resolve();
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
// ... other imports 

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "frontend", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});
const port = process.env.PORT || 9001
app.listen(port, function () {
})
