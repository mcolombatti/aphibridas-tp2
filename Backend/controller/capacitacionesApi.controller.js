import capacitacionesDao from '../model/capacitaciones.dao.js' 
  

/*
 *
 * Busca todos los usuarios de la base de datos 
 * 
 * @param req 
 * @param res 
 */
 export async function findAllCapacitaciones(req, res){
  capacitacionesDao.findAll() 
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
}/*
 *
 * Busca todos los usuarios de la base de datos 
 * 
 * @param req 
 * @param res 
 */
 export async function createCapacitacion(req, res){
  capacitacionesDao.insertCapacitacion(req.body) 
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
   /*
 *
 * Busca todos los usuarios de la base de datos 
 * 
 * @param req 
 * @param res 
 */
 export async function getCapacitacion(req, res){
  capacitacionesDao.viewById(req.params.id) 
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
    
   /*
 *
 * Busca todos los usuarios de la base de datos 
 * 
 * @param req 
 * @param res 
 */
 export async function updateCapacitacion(req, res){
  capacitacionesDao.update(req.params.id, req.body)
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
     /*
 *
 * Busca todos los usuarios de la base de datos 
 * 
 * @param req 
 * @param res 
 */
 export async function patchCapacitacion(req, res){
  capacitacionesDao.patch(req.params.id, req.body)
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
       
     /*
 *
 * Busca todos los usuarios de la base de datos 
 * 
 * @param req 
 * @param res 
 */
 export async function deleteCapacitacion(req, res){
  capacitacionesDao.deleteById(req.params.id)
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
      createCapacitacion, updateCapacitacion, deleteCapacitacion,findAllCapacitaciones,getCapacitacion,patchCapacitacion
};