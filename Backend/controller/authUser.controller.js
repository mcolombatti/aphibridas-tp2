import * as yup from 'yup'
import { generate } from '../middleware/validatorToken.js'
import authenticationDao from "../model/authentication.dao.js"

const schema = yup.object({
    email: yup.string().email().required("Es obligatorio ingresar un correo electrónico para registrarse"),
    password: yup.string().min(8).required("Es obligatorio ingresar un password para registrarse"),
    name: yup.string().required("El nombre es obligatorio"),
    rol: yup.string()

}).noUnknown()
const schemaLogin = yup.object({
    email: yup.string().email().required("Es obligatorio ingresar un correo electrónico para loguearse"),
    password: yup.string().required("Es obligatorio ingresar un password para loguearse"),
}).noUnknown()

/**
 * Función para registrarse en la aplicación
 * 
 * @param req 
 * @param res 
 */

 export function register(req, res) {
    schema.validate(req.body) 
    .then(function (data){
        authenticationDao.register(data)
        .then(function(){
            res.json({ msg: "Usuario registrado satisfactoriamente"})
        })
        .catch(function (err){
            if (err.error){
                res.status(400).json({ error: 400, msg: err.msg})
            }
            else {
                res.status(500).json({error:500, msg: `Ocurrió un error inesperado ${err}`})
            }
        })
    })
    .catch(function(err){
        res.status(400).json({ error: 400, msg: `Error en los datos enviados al registrarse`, err: err.error})
    }) 
 }

 /**
 * Función para loguearse en la aplicación
 * 
 * @param req 
 * @param res 
 */

export function login(req, res){
     
    
    authenticationDao.login(req.body.email, req.body.password)

    .then(function(data){
        const token = generate({
            id: data.id,
            email: data.email,
            name: data.name,
            rol: data.rol
        })
        res.header('auth-token', token).json({user:data, token: token})
    })
    .catch(function(err){
        if (err.error){
            res.status(401).json({error:401, msg: err.msg})
        }
        else {
            res.status(500).json({error:500, msg:`Ocurrio un error ${err}`})
        }
    })
 
}

/**
 * Busca todos los usuarios de la base de datos 
 * 
 * @param req 
 * @param res 
 */
export function findAll(req, res){
    authenticationDao.findAll()
    .then(function(result){
        res.json(result)
    })
    .catch(function(err){
        if (err.error){
            res.status(400).json({ error: 400, msg: err.msg })
        }
        else{
            res.status(500).json({ error: 500, msg: `Ocurrió un error inesperado ${err}` })
        }
    })
}

/**
 * Devuelve los datos del usuario autenticado
 * 
 * @param req 
 * @param res 
 */
export function obtainLogin(req, res){
    res.json(req.user)
}

export default {
    register,
    login,
    findAll,
    obtainLogin
}