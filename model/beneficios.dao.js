import mongodb from 'mongodb'
import { connection } from './connection.js'

export async function findAll() {
    return connection(
        async function (db) {
            return await db.collection('Beneficios').find({}).toArray()
        }
    )
}


export async function insert(entity) {
    return connection(
        async function (db) {
            await db.collection("Beneficios").insertOne(entity)
            return entity
        }
    )
}

export async function viewById(id) {
    return connection(async function (db) {
        return await db.collection("Beneficios").findOne({ _id: mongodb.ObjectId(id) })
    })
}




export async function update(id, entity) {

    return connection(async function (db) {
        return await db.collection("Beneficios").replaceOne({ _id: mongodb.ObjectId(id) }, entity)
    })
}


/**
 * Hace un delete  del testimonio con el id que le pase 
 * por query para borrar el testimonio de la base de datos
 * 
 * @returns Promise
 * @param id (int)
 */

export async function deleteById(id) {
    return connection(async function (db) {
        return await db.collection("Beneficios").deleteOne({ _id: mongodb.ObjectId(id) }) // hace un delete del testimonio con el id que le pase por query
    })
}

export default {
    findAll,
    insert,
    viewById,
    deleteById,
    update
}


