import * as yup from 'yup'
import {
    generate
} from '../middleware/validatorToken.js'
import config from '../config.js'
import authenticationDao from "../model/authentication.dao.js"
import nodemailer from 'nodemailer'
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
        .then(function (data) {
            authenticationDao.register(data)
                .then(function () {
                    res.json({
                        msg: "Usuario registrado satisfactoriamente"
                    })
                })
                .catch(function (err) {
                    if (err.error) {
                        res.status(400).json({
                            error: 400,
                            msg: err.msg
                        })
                    } else {
                        res.status(500).json({
                            error: 500,
                            msg: `Ocurrió un error inesperado ${err}`
                        })
                    }
                })
        })
        .catch(function (err) {
            res.status(400).json({
                error: 400,
                msg: `Error en los datos enviados al registrarse`,
                err: err.error
            })
        })
}

/**
 * Función para loguearse en la aplicación
 * 
 * @param req 
 * @param res 
 */

export function login(req, res) {


    authenticationDao.login(req.body.email, req.body.password)

        .then(function (data) {
            const token = generate({
                id: data.id,
                email: data.email,
                name: data.name,
                rol: data.rol
            })
            res.header('auth-token', token).json({
                user: data,
                token: token
            })
        })
        .catch(function (err) {
            if (err.error) {
                res.status(401).json({
                    error: 401,
                    msg: err.msg
                })
            } else {
                res.status(500).json({
                    error: 500,
                    msg: `Ocurrio un error ${err}`
                })
            }
        })

}

/**
 * Busca todos los usuarios de la base de datos 
 * 
 * @param req 
 * @param res 
 */
export function findAll(req, res) {
    authenticationDao.findAll()
        .then(function (result) {
            res.json(result)
        })
        .catch(function (err) {
            if (err.error) {
                res.status(400).json({
                    error: 400,
                    msg: err.msg
                })
            } else {
                res.status(500).json({
                    error: 500,
                    msg: `Ocurrió un error inesperado ${err}`
                })
            }
        })
}

/**
 * Devuelve los datos del usuario autenticado
 * 
 * @param req 
 * @param res 
 */
export function obtainLogin(req, res) {
    res.json(req.user)
}

/**
 * Genera un link para resetear el password con el email ingresado por body
 * 
 * @param req 
 * @param res 
 */
export function forgotPassword(req, res) {

    authenticationDao.resetPass(req.body.email)

        .then(function (data) {
            const token = generate({
                id: data.id,
                email: data.email,
                name: data.name,
                rol: data.rol
            })
            const link = `http://localhost:3000/reset-password/${data.id}/${token}`;



            res.send(link);

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: `${config.auth.user}`,
                    pass: `${config.auth.pass}`
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            const mailConfigurations = {
                from: 'maximiliano.colombat@davinci.edu.ar',
                to: 'maxicolombatti@gmail.com',
                subject: 'Sending Email using Node.js',
                text: 'Hi! There, You know I am using the NodeJS ' +
                    'Code along with NodeMailer to send this email.'
            };

            transporter.sendMail(mailConfigurations, function (error, info) {
                if (error) throw Error(error);
                console.log('Email Sent Successfully');
                console.log(info);
            });
        })
        .catch(function (err) {
            if (err.error) {
                res.status(401).json({
                    error: 401,
                    msg: err.msg
                })
            } else {
                res.status(500).json({
                    error: 500,
                    msg: `Ocurrio un error ${err}`
                })
            }
        })
}



/**
 * Resetea el password del usuario con el nuevo password enviado por body. 
 * Valida previo al reset que el token enviado por url sea igual al que surge 
 * de generarlo con la informacion del usuario que hace la peticion
 * 
 * @param req 
 * @param res 
 */
export function resetPassword(req, res) {

    authenticationDao.generatePass(req.body, req.params.id)
        .then(function (result) {
            res.json(result)
        })
        .catch(function (err) {
            if (err.error) {
                res.status(400).json({
                    error: 400,
                    msg: err.msg
                })
            } else {
                res.status(500).json({
                    error: 500,
                    msg: `Ocurrió un error inesperado ${err}`
                })
            }
        })
}


export default {
    register,
    forgotPassword,
    resetPassword,
    login,
    findAll,
    obtainLogin
}