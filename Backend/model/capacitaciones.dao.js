import mongodb from 'mongodb'
import { connection } from './connection.js'

export async function findAll() {
    return connection(
        async function (db)  {
            return await db.collection('Capacitaciones').find({}).toArray()
        }
    )
}


export async function insertCapacitacion(entity) {
    return connection(
        async function (db) {
            await db.collection("Capacitaciones").insertOne(entity)
            return entity
        }
    )
}

export async function viewById(id) {
    return connection(async function (db) {
        return await db.collection("Capacitaciones").findOne({ _id: mongodb.ObjectId(id) })
    })
}




export async function update(id, entity) {
    
    return connection(async function (db) {
        return await db.collection("Capacitaciones").replaceOne({_id: mongodb.ObjectId(id)}, entity )  
    })
}


/**
 * Hace un delete  del testimonio con el id que le pase 
 * por query para borrar el testimonio de la base de datos
 * 
 * @returns Promise
 * @param id (int)
 */

 export  async function deleteById(id){
    return connection(async function(db){
        return await db.collection("Capacitaciones").deleteOne({_id: mongodb.ObjectId(id)}) // hace un delete del testimonio con el id que le pase por query
    }) 
}  

export default {
    findAll,
    insertCapacitacion,
    viewById,
    deleteById, 
    update
}


