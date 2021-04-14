const router = require('express').Router();
const controller = require('../controllers/tiposRecomendacionesController');

router.get('/', controller.obtener);
router.put('/:id', controller.editar);
router.post('/', controller.crear);
router.delete('/', controller.eliminar);

module.exports = router;