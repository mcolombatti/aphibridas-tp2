import express from 'express' 
import config from '../config.js'
import beneficiosApiController from '../controller/beneficiosApi.controller.js'
import beneficiosDao from '../model/beneficios.dao.js' 
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
    beneficiosDao.findAllEmpresas()
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
    beneficiosApiController.createEmpresa(req.body)
        .then(function (data) {
            res.status(200).json(`se creó satisfactoriamente la empresa con id: ${req.params.id}`);
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
        beneficiosDao.viewById((req.params.id))
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
    beneficiosApiController.updateEmpresa(req.params.id, req.body)
        .then(function (data) {
            res.status(200).json(`se actualizó satisfactoriamente el empresa con id: ${req.params.id}`);
        })
        .catch(function (err) {
          res.status(400).json({
            err: 400,
            msg: `no se encuentra el empresa id: ${req.params.id}`
          });
        });
    })
    router.route("/:id")
  .patch([mw_access], function (req, res) {
    beneficiosApiController.patchEmpresa(req.params.id, req.body)
      .then(function (testimonial) {
        res.status(200).json(`se agregó al empleado a la empresa con id ${req.params.id}`);
      })
      .catch(function (err) {
        res.status(404).json({
          err: 404,
          msg: `no se encuentra la empresa`,
        });
      });

  })
    .put([mw_access],function (req, res) { 
    beneficiosApiController.updateEmpresa(req.params.id, req.body)
        .then(function (data) {
            res.status(200).json(`se actualizó satisfactoriamente el empresa con id: ${req.params.id}`);
        })
        .catch(function (err) {
          res.status(400).json({
            err: 400,
            msg: `no se encuentra el empresa id: ${req.params.id}`
          });
        });
    })
    .delete([mw_access],function (req, res) { 
    beneficiosApiController.DeleteEmpresa((req.params.id))
        .then(function (data) {
            res.status(200).json(`eliminado el empresa con id: ${req.params.id}`);
            
        })
        .catch(function (err) {
          res.status(400).json({
            err: 400,
            msg: err.message
          });
        });
    })

export default router