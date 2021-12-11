import express from 'express' 
import config from '../config.js'
import empleadosApiController from '../controller/empleadosApi.controller.js'
import empleadosDao from '../model/empleados.dao.js' 
import {validator} from '../middleware/validatorToken.js' 
import {admin_validator} from '../middleware/admin_validator.js' 

const route = express.Router()
 
route.get('/', [admin_validator],empleadosApiController.findAll)
 .post('/', [admin_validator], empleadosApiController.createEmpleado)
 route.put('/:id', [admin_validator], empleadosApiController.updateEmpleado)
 route.get('/:id', [validator],  empleadosApiController.getEmpleado)
 
 route.patch('/assignation/:id',[admin_validator], empleadosApiController.assignCapacitacion)
 route.delete('/:id',[admin_validator], empleadosApiController.deleteEmpleado)
  
  
export default route