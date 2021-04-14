const router = require('express').Router();
const controller = require('../controllers/usuariosController');

router.get('/', controller.obtener);
router.put('/:id', controller.editar);
router.post('/', controller.crear);
router.delete('/:id', controller.eliminar);
router.post('/login', controller.ingresar);



module.exports = router;