const pool = require('../config/database');
const modelGenerico = require('./modelGenerico');

const model = {};
const nombreTabla = 'productos_de_pedidos';

model.crear = (datos) => {
    modelGenerico.crear(nombreTabla, datos);
}

model.editar = (datos, id) => {
    modelGenerico.editar(nombreTabla, datos, id);
}

model.eliminar = (id) => {
    modelGenerico.eliminar(nombreTabla, id);
}

model.obtener = async () => {
    return modelGenerico.obtener(nombreTabla);
}

module.exports = model;