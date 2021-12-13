import express from 'express' 
import config from '../config.js'
import empleadosApiController from '../controller/empleadosApi.controller.js'
import {validator} from '../middleware/validatorToken.js' 
import {admin_validator} from '../middleware/admin_validator.js' 

const route = express.Router()


route.get('/', [admin_validator],empleadosApiController.findAll)

route.get('/query',  empleadosApiController.getEmpleadoByQuery)
 .post('/', [admin_validator], empleadosApiController.createEmpleado)
 .post('/', [admin_validator], empleadosApiController.createEmpleados)
 route.put('/:id', [admin_validator], empleadosApiController.updateEmpleado)
 route.get('/:id', [validator],  empleadosApiController.getEmpleado)
 route.patch('/:id/capacitaciones',[admin_validator], empleadosApiController.assignCapacitacion)
 route.patch('/:id/capacitaciones/estado',[validator], empleadosApiController.completeCapacitacion)
 route.delete('/:id',[admin_validator], empleadosApiController.deleteEmpleado)
  
  
export default route