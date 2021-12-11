
import express from 'express' 
import config from '../config.js'
import capacitacionesApiController from '../controller/capacitacionesApi.controller.js'
import capacitacionesDao from '../model/capacitaciones.dao.js' 
import {validator} from '../middleware/validatorToken.js' 
import {admin_validator} from '../middleware/admin_validator.js' 
const route = express.Router()
 
 
route.get('/', [admin_validator],capacitacionesApiController.findAllCapacitaciones)
 .post('/', [admin_validator], capacitacionesApiController.createCapacitacion)
 route.put('/:id', [admin_validator], capacitacionesApiController.updateCapacitacion)
 .get('/:id', [admin_validator],  capacitacionesApiController.getCapacitacion)
 .delete('/:id',[admin_validator], capacitacionesApiController.deleteCapacitacion)
  
   

export default route