import beneficiosDao from '../model/beneficios.dao.js' 
  
 
 

/**
 * Crea la empresa en la base
 * @param {object} entity 
 */
export async function createEmpresa(entity) {
  beneficiosDao.insertEmpresa(entity)
   
}
   /**
    * Actualiza la Empresa
    * @param {number} id 
    * @param {object} entity 
    */
export async function updateEmpresa(id, entity) {
  beneficiosDao.updateEmpresaById(id, entity)
}
  
   /**
    * Actualiza la Empresa
    * @param {number} id 
    * @param {object} entity 
    */
export async function patchEmpresa(id, entity) {
  beneficiosDao.patchEmpresaById(id, entity)
}
  

/**
 * Elimina la empresa de la base
 * @param {number} id 
 */
export async function DeleteEmpresa(id) {
  beneficiosDao.deleteEmpresaById(id)
   
}
  
export default { 
  createEmpresa, updateEmpresa, DeleteEmpresa,patchEmpresa
};
