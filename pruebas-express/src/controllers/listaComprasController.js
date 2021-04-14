const model = require('../models/listaComprasModel');
const controller = {};

controller.crear = async (req, res) => {
    await model.crear(req.body);
    res.json({
        ok: true,
        msg: 'Creado exitosamente'
    })
}


controller.eliminar = async (req, res) => {
    await model.eliminar(req.params.id);
    res.json({
        ok: true,
        msg: 'Eliminado exitosamente'
    })
}

controller.editar = async (req, res) => {
    await model.editar(req.body, req.params.id);
    res.json({
        ok: true,
        msg: 'Editado exitosamente'
    })
}

controller.obtener = async (req, res) => {
    const resultados = await model.obtener(req.body);
    res.json({
        ok: true,
        resultados,
        msg: 'Obtenido exitosamente'
    })
}
module.exports = controller;