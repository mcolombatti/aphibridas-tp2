import empleadosDao from '../model/empleados.dao.js' 
import * as yup from 'yup'

const schema = yup.object({
    dni: yup.number('El dni tiene que estar compuesto unicamente por numeros').required("Es obligatorio ingresar un correo electrónico para registrarse"),
    email: yup.string().email('Debes ingresar un email válido').required("Es obligatorio ingresar un email "),
    name: yup.string().required("El nombre es obligatorio").min(3, 'El nombre tiene que tener al menos 3 caracteres').max(70, 'el nombre no puede superar los 70 caracteres'),
    apellido: yup.string('el apellido no puede tener numeros').required("El apellido es obligatorio").min(3, 'El apellido tiene que tener al menos 3 caracteres').max(70, 'el apellido no puede superar los 70 caracteres'),
    calle: yup.string('la calle no puede contener numeros'),
    altura: yup.number('la altura solo puede contener numeros'),
    fechanac: yup.date('la fecha de nacimiento tiene que ser una fecha'),

}).noUnknown()

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
     schema.validate(req.body) 
    .then(function (data){
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
        })})
  
        .catch(function(err){
            res.status(400).json({ error: 400, msg: err.message  })
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
