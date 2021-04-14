const router = require('express').Router();
const controller = require('../controllers/listaComprasController');

router.get('/', controller.obtener);
router.put('/:id', controller.editar);
router.post('/', controller.crear);
router.delete('/:id', controller.eliminar);

module.exports = router;