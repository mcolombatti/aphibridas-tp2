import empleadosDao from '../model/empleados.dao.js' 
  

/**
 * Busca todos los usuarios de la base de datos 
 * 
 * @param req 
 * @param res 
 */
 export async function findAll(req, res){
  empleadosDao.viewAllEmpleados()
  .then(function(result){
      res.json(result)
  })
  .catch(function(err){
      if (err.error){
          res.status(400).json({ error: 400, msg: err.msg })
      }
      else{
          res.status(500).json({ error: 500, msg: `Ocurrió un error inesperado ${err}` })
      }
  })
}

/**
 * Busca todos los usuarios de la base de datos 
 * 
 * @param req 
 * @param res 
 */
 export async function createEmpleado(req, res){
  empleadosDao.insertEmpleado(req.body)
  .then(function(result){
      res.json(result)
  })
  .catch(function(err){
      if (err.error){
          res.status(400).json({ error: 400, msg: err.msg })
      }
      else{
          res.status(500).json({ error: 500, msg: `Ocurrió un error inesperado ${err}` })
      }
  })
}
/**
 * Busca todos los usuarios de la base de datos 
 * 
 * @param req 
 * @param res 
 */
 export async function updateEmpleado(req, res){
  empleadosDao.updateEmpleadoById(req.params.id, req.body)
  .then(function(result){
      res.json(result)
  })
  .catch(function(err){
      if (err.error){
          res.status(400).json({ error: 400, msg: err.msg })
      }
      else{
          res.status(500).json({ error: 500, msg: `Ocurrió un error inesperado ${err}` })
      }
  })
}
/**
 * Busca todos los usuarios de la base de datos 
 * 
 * @param req 
 * @param res 
 */
 export async function getEmpleado(req, res){
  empleadosDao.getById(req.params.id,)
  .then(function(result){
      res.json(result)
  })
  .catch(function(err){
      if (err.error){
          res.status(400).json({ error: 400, msg: err.msg })
      }
      else{
          res.status(500).json({ error: 500, msg: `Ocurrió un error inesperado ${err}` })
      }
  })
}
/**
 * Busca todos los usuarios de la base de datos 
 * 
 * @param req 
 * @param res 
 */
 export async function deleteEmpleado(req, res){
  empleadosDao.deleteById(req.params.id)
  .then(function(result){
      res.json(result)
  })
  .catch(function(err){
      if (err.error){
          res.status(400).json({ error: 400, msg: err.msg })
      }
      else{
          res.status(500).json({ error: 500, msg: `Ocurrió un error inesperado ${err}` })
      }
  })
}
  
  
export default { 
      createEmpleado, updateEmpleado, deleteEmpleado,findAll,getEmpleado
};
