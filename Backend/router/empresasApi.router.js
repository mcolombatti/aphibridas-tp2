import express from 'express' 
import config from '../config.js'
import empresasApiController from '../controller/empresasApi.controller.js'
import empresasDao from '../model/empresas.dao.js' 
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
    empresasDao.findAllEmpresas()
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
    empresasApiController.createEmpresa(req.body)
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
        empresasDao.viewById((req.params.id))
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
    empresasApiController.updateEmpresa(req.params.id, req.body)
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
    empresasApiController.patchEmpresa(req.params.id, req.body)
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
    empresasApiController.updateEmpresa(req.params.id, req.body)
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
    empresasApiController.DeleteEmpresa((req.params.id))
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