import mongodb from 'mongodb'
import config from '../config.js'

const client = new mongodb.MongoClient(`mongodb://${config.db.host}:${config.db.port}`)
  
/**
 * Se encarga de hacer la conexión con la base de datos.
 * 
 * @param {Function} callback 
 * @returns {Promise}
 */

export async function connection(callback){
    await client.connect()
    const result = await callback(client.db(config.db.dbName))
    
    await client.close()
    return result
}
export default {
    connection
}