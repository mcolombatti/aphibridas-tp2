import { connection } from '../model/connection.js'
import bcrypt from 'bcrypt'

/**
 * Llama a la conexión con la base de datos para loguear al usuario con las credenciales enviadas por parámetro
 * 
 * @param { string } email 
 * @param { string } password 
 * @return { Promise }
 */
async function login (email, password) {
    return await connection(async function(db){
        const user = await db.collection('Users').findOne({ email: email})
        
        if(user){
            const validate = await bcrypt.compare(password, user.password)
            if(validate){
                return {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    rol: user.rol
                }
            }
            else {
                throw {
                    error: 403, msg: "El password enviado no coincide con nuestros registros"
                }
            }
        }
        else {
            throw {error: 404, msg: "El email no existe en nuestros registros"}
        }
    })
}
/**
 * Llama a la conexión con la base de datos para registrar al usuario con las credenciales enviadas por parámetro
 * 
 * @param {Object} user 
 * @returns {Promise}
 */
async function register(user) {
    return connection(async function(db) {
        const oldUser = await db.collection('Users').findOne({ email: user.email})
        if(!oldUser) {
            const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(user.password, salt)

            await db.collection('Users').insertOne({
                name: user.name,
                email: user.email,
                
                rol: user.rol,
                password: password
            }) .catch(function(err){
               
                res.status(500).json({ error: 500, msg: `Ocurrió un error inesperado ${err}` })
            
        }) 
        
        }
        else{
            throw { error: 400, msg: "El usuario ya existe en nuestros registros."}
        }
    })
} 
/**
 * Retorna un array con los documentos del cursor
 * @returns {Promise} 
 */
async function findAll(){
    return await connection(async function (db) {
        return await db.collection('Users').find().toArray() // usamos toArray porque tenemos que retornar en un array los documentos del cursor
    })
}

/**
 * Retorna un array con los documentos del cursor
 * @returns {Promise} 
 */
async function resetPass(email){
    return await connection(async function(db){
        const user = await db.collection('Users').findOne({ email: email})
         if(user){
            
                return {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    rol: user.rol
                }
             
        }   
        else {
            throw {error: 404, msg: "El email no existe en nuestros registros"}
        }})
}
/**
 * Retorna un array con los documentos del cursor
 * @returns {Promise} 
 */
async function generatePass(password,token){
    return connection(async function(db) {
        const tokenValidate = token

        if (tokenValidate){
            try {
                const userData = jwt.verify(tokenValidate, "SECRETO")
                 
                const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(userData.password, salt)

            await db.collection('Users').insertOne({
                name: user.name,
                email: user.email,
                
                rol: user.rol,
                password: password
            }) .catch(function(err){
               
                res.status(500).json({ error: 500, msg: `Ocurrió un error inesperado ${err}` })
            
        }) 
            } catch (err) {
                return res.status(400).json({error: 400, msg: 'Token invalido'})
            }
        }
        else {
            return res.status(400).json({error: 400, msg: 'Token no enviado'})
        }
     
    })
   
}

export default {
    login,resetPass,generatePass,
    register,
    findAll 
}