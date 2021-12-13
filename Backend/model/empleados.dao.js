import mongodb from 'mongodb'
import { connection } from './connection.js'

export async function viewAllEmpleados() {
    return connection(
        async function (db)  {
            return await db.collection('Empleados').find({}).toArray()
        }
    )
}
export async function getById(id) {
    return connection(async function (db) {
        return await db.collection("Empleados").findOne({ _id: mongodb.ObjectId(id) })
    })
}

export async function viewEmpleadoByQuery(query) {
   
    return connection(async function (db) { 
        return await db.collection('Empleados').find( query ).toArray()
    })
}


export async function insertEmpleado(entity) {
    return connection(
        async function (db) {
            await db.collection("Empleados").insertOne(entity )
            return entity
        }
    )
}



export async function updateEmpleadoById(id, entity) {
    
    return connection(async function (db) {
        return await db.collection("Empleados").replaceOne({_id: mongodb.ObjectId(id)}, entity )  
    })
}


/**
 * Hace un delete  del testimonio con el id que le pase 
 * por query para borrar el testimonio de la base de datos
 * 
 * @returns Promise
 * @param id (int)
 */

 export async function deleteById(id){
    return connection(async function(db){
        return await db.collection("Empleados").deleteOne({_id: mongodb.ObjectId(id)}) // hace un delete del testimonio con el id que le pase por query
    }) 
}  

export async function patch(id, entity){
    return connection(async function(db){
        return await db.collection("Empleados").updateOne({_id: mongodb.ObjectId(id)},{$push:{"capacitacion": entity,"finalizado": false}})   
    }) 
}
export async function completedState(id){
    return connection(async function(db){
        return await db.collection("Empleados").updateOne({_id: mongodb.ObjectId(id)},{$set:{"finalizado": true}})   
    }) 
}
export default {
    viewAllEmpleados,
    insertEmpleado, 
    deleteById,patch,
    updateEmpleadoById,getById,viewEmpleadoByQuery
}


