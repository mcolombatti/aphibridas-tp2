import mongodb from 'mongodb'
import { connection } from './connection.js'

export async function findAllEmpresas() {
    return connection(
        async function (db)  {
            return await db.collection('Empresas').find({}).toArray()
        }
    )
}


export async function insertEmpresa(entity) {
    return connection(
        async function (db) {
            await db.collection("Empresas").insertOne(entity)
            return entity
        }
    )
}

export async function viewById(id) {
    return connection(async function (db) {
        return await db.collection("Empresas").findOne({ _id: mongodb.ObjectId(id) })
    })
}



export async function patchEmpresaById(id, entity){
    return connection(async function(db){
        return await db.collection("Empresas").updateOne({_id: mongodb.ObjectId(id)},{$push:{"empleados": entity}})   
    }) 
}

export async function updateEmpresaById(id, entity) {
    
    return connection(async function (db) {
        return await db.collection("Empresas").replaceOne({_id: mongodb.ObjectId(id)}, entity )  
    })
}


/**
 * Hace un delete  del testimonio con el id que le pase 
 * por query para borrar el testimonio de la base de datos
 * 
 * @returns Promise
 * @param id (int)
 */

 export  async function deleteEmpresaById(id){
    return connection(async function(db){
        return await db.collection("Empresas").deleteOne({_id: mongodb.ObjectId(id)}) // hace un delete del testimonio con el id que le pase por query
    }) 
}  

export default {
    findAllEmpresas,
    insertEmpresa,
    viewById,
    deleteEmpresaById,
    patchEmpresaById,
    updateEmpresaById
}


