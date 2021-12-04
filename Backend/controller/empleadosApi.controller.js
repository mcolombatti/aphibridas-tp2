import empleadosDao from '../model/empleados.dao.js' 
  
  

/**
 * Crea la empresa en la base
 * @param {object} entity 
 */
export async function createEmpleado(entity) {
  empleadosDao.insertEmpleado(entity)
   
}
   /**
    * Actualiza la Empresa
    * @param {number} id 
    * @param {object} entity 
    */
export async function updateEmpleado(id, entity) {
  empleadosDao.updateEmpleadoById(id, entity)
}
  

/**
 * Elimina la empresa de la base
 * @param {number} id 
 */
export async function DeleteEmpleado(id) {
  empleadosDao.deleteEmpleadoById(id)
   
}
  
export default { 
  createEmpleado, updateEmpleado, DeleteEmpleado
};
