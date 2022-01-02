
import express from 'express'
import config from '../config.js'
import beneficiosApiController from '../controller/beneficiosApi.controller.js'
import { validator } from '../middleware/validatorToken.js'
import { admin_validator } from '../middleware/admin_validator.js'
const route = express.Router()


route.get('/', [validator], beneficiosApiController.findAllBeneficios)
    .post('/', [admin_validator], beneficiosApiController.createBeneficio)
route.put('/:id', [admin_validator], beneficiosApiController.updateBeneficio)
    .get('/:id', [validator], beneficiosApiController.getBeneficio)
    .delete('/:id', [admin_validator], beneficiosApiController.deleteBeneficio)



export default route