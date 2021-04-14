const pool = require('../config/database');

const model = {};

model.crear = (nombreTabla, datos) => {
    const sql = `INSERT INTO ${nombreTabla} SET ?`;
    pool.query(sql, datos);
}

model.editar = (nombreTabla, datos, id) => {
    const sql = `UPDATE ${nombreTabla} SET ? where id = ` + id;
    pool.query(sql, datos);
}

model.eliminar = (nombreTabla, id) => {
    const sql = `DELETE FROM ${nombreTabla} WHERE id = ` + id;
    pool.query(sql);
}

model.obtener = async (nombreTabla) => {
    const sql = `SELECT *  FROM ${nombreTabla}`;
    return await pool.query(sql);
}



module.exports = model;