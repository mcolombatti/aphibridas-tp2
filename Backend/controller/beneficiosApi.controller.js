import beneficiosDao from '../model/beneficios.dao.js'

const schema = yup.object({
    titulo: yup.string().required("El titulo es obligatorio").min(3, 'El titulo tiene que tener al menos 3 caracteres').max(70, 'el titulo no puede superar los 70 caracteres'),
    descripcion: yup.string().required("la descripcion es obligatorio").min(3, 'El titulo tiene que tener al menos 3 caracteres').max(150, 'la descripcion no puede superar los 15 caracteres'),
    categoria: yup.string().required("Es obligatorio ingresar un email "),
    fechavenc: yup.date('la fecha de nacimiento tiene que ser una fecha'),


}).noUnknown()
/*
 *
 * Busca todos los usuarios de la base de datos 
 * 
 * @param req 
 * @param res 
 */
export async function findAllBeneficios(req, res) {
    beneficiosDao.findAll()
        .then(function (result) {
            res.json(result)
        })
        .catch(function (err) {
            if (err.error) {
                res.status(400).json({ error: 400, msg: err.msg })
            }
            else {
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
export async function createBeneficio(req, res) {
    beneficiosDao.insert(req.body)
    schema.validate(req.body)

        .then(function (result) {
            res.json(result)
        })
        .catch(function (err) {
            if (err.error) {
                res.status(400).json({ error: 400, msg: err.msg })
            }
            else {
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
export async function getBeneficio(req, res) {
    beneficiosDao.viewById(req.params.id)
        .then(function (result) {
            res.json(result)
        })
        .catch(function (err) {
            if (err.error) {
                res.status(400).json({ error: 400, msg: err.msg })
            }
            else {
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
export async function updateBeneficio(req, res) {
    beneficiosDao.update(req.params.id, req.body)
    schema.validate(req.body)

        .then(function (result) {
            res.json(result)
        })
        .catch(function (err) {
            if (err.error) {
                res.status(400).json({ error: 400, msg: err.msg })
            }
            else {
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
export async function deleteBeneficio(req, res) {
    beneficiosDao.deleteById(req.params.id)
        .then(function (result) {
            res.json(result)
        })
        .catch(function (err) {
            if (err.error) {
                res.status(400).json({ error: 400, msg: err.msg })
            }
            else {
                res.status(500).json({ error: 500, msg: `Ocurrió un error inesperado ${err}` })
            }
        })
}

export default {
    createBeneficio, updateBeneficio, deleteBeneficio, findAllBeneficios, getBeneficio
};