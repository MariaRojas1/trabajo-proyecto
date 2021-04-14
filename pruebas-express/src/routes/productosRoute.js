const router = require('express').Router();
const controller = require('../controllers/productosController');

router.get('/', controller.obtener);
router.get('/ultimos', controller.obtenerUltimos);
router.put('/:id', controller.editar);
router.post('/', controller.crear);
router.delete('/:id', controller.eliminar);

module.exports = router;