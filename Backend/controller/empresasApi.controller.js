import empresasDao from '../model/empresas.dao.js' 
  
 
 

/**
 * Crea la empresa en la base
 * @param {object} entity 
 */
export async function createEmpresa(entity) {
  empresasDao.insertEmpresa(entity)
   
}
   /**
    * Actualiza la Empresa
    * @param {number} id 
    * @param {object} entity 
    */
export async function updateEmpresa(id, entity) {
  empresasDao.updateEmpresaById(id, entity)
}
  
   /**
    * Actualiza la Empresa
    * @param {number} id 
    * @param {object} entity 
    */
export async function patchEmpresa(id, entity) {
  empresasDao.patchEmpresaById(id, entity)
}
  

/**
 * Elimina la empresa de la base
 * @param {number} id 
 */
export async function DeleteEmpresa(id) {
  empresasDao.deleteEmpresaById(id)
   
}
  
export default { 
  createEmpresa, updateEmpresa, DeleteEmpresa,patchEmpresa
};
