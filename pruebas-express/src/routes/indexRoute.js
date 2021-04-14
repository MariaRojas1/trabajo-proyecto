const router = require('express').Router();
const usuarios = require('./usuariosRoute');
const pedidos = require('./pedidosRoute');
const productos = require('./productosRoute');
const tiposRecomendaciones = require('./tiposRecomendacionesRoute');
const recomendaciones = require('./recomendacionesRoute');
const listaCompras = require('./listaComprasRoute');
const direcciones = require('./direccionesRoute');
const categorias = require('./categoriasRoute');

router.use('/usuarios', usuarios);
router.use('/pedidos', pedidos);
router.use('/productos', productos);
router.use('/tiposRecomendaciones', tiposRecomendaciones);
router.use('/recomendaciones', recomendaciones);
router.use('/listaCompras', listaCompras);
router.use('/direcciones', direcciones);
router.use('/categorias', categorias);

module.exports = router;


