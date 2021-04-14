const pool = require('../config/database');
const modelGenerico = require('./modelGenerico');

const model = {};
const nombreTabla = 'productos';

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
    const sql = `SELECT pro.id,  pro.descripcion, pro.nombre, pro.precio, pro.imagen, ca.nombre AS categoria  FROM productos pro
                    LEFT JOIN categorias ca ON pro.id_categoria = ca.id`;
    return await pool.query(sql);
}

model.obtenerUltimos = async () => {
    const sql = `SELECT pro.id, pro.descripcion,  pro.nombre, pro.precio, pro.imagen, ca.nombre AS categoria  FROM productos pro
                    LEFT JOIN categorias ca ON pro.id_categoria = ca.id
                    ORDER BY pro.id DESC LIMIT 3`;
    return await pool.query(sql);
}

module.exports = model;