import express from 'express' 
import config from '../config.js'
import empleadosApiController from '../controller/empleadosApi.controller.js'
import empleadosDao from '../model/empleados.dao.js' 

const router = express.Router()

function mw_access(req, res, next){
    if(req.query.pass === config.middleware.access){
        next()
    }
    else {
        res.status(401).json({err:401, msg: 'no tiene autorizacion para realizar la acción'})
    }

}

router.route("/")
.get(function (req, res) {
    empleadosDao.findAllEmpleados()
      .then(function (data) {
        res.status(200).json(data);
    })
    .catch(function (err) {
      res.status(400).json({
        err: 500,
        msg: err.message
      });
    });
  })
  .post([mw_access],function (req, res) {
    empleadosApiController.createEmpleado(req.body)
        .then(function (data) {
            res.status(200).json(`se creó satisfactoriamente el empleado`);
        })
        .catch(function (err) {
          res.status(400).json({
            err: 400,
            msg: err.message
          });
        });
    })
    router.route("/:id")
    .get(function (req, res) { 
        empleadosDao.viewById((req.params.id))
            .then(function (data) {
                res.status(200).json(data);                
            })
            .catch(function (err) {
              res.status(400).json({
                err: 400,
                msg: err.message
              });
            });
        })
  .put([mw_access],function (req, res) { 
    empleadosApiController.updateEmpleado(req.params.id, req.body)
        .then(function (data) {
            res.status(200).json(`se actualizó satisfactoriamente el empleado con id: ${req.params.id}`);
        })
        .catch(function (err) {
          res.status(400).json({
            err: 400,
            msg: `no se encuentra el empleado id: ${req.params.id}`
          });
        });
    })
    .delete([mw_access],function (req, res) { 
    empleadosApiController.DeleteEmpleado((req.params.id))
        .then(function (data) {
            res.status(200).json(`eliminado el empleado con id: ${req.params.id}`);
            
        })
        .catch(function (err) {
          res.status(400).json({
            err: 400,
            msg: err.message
          });
        });
    })

export default router