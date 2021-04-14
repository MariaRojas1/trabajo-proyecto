const model = require('../models/usuariosModel');
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

controller.ingresar = async (req, res) => {
    const usuarioEncontrado = await model.buscarUsuarioPorCorreo(req.body.correo);
    if (usuarioEncontrado && usuarioEncontrado.length > 0) {
        usuario = usuarioEncontrado[0];
        if (usuario.contrasena === req.body.contrasena) {
            res.json({
                ok: true,
                msg: 'inicio sesion correctamente',
                id: usuario.id,
                nombre: usuario.nombre + " " + usuario.apellidos
            })
        } else {
            res.json({
                ok: false,
                msg: 'contrasena incorrecta'
            })
        }

    } else {
        res.json({
            ok: false,
            msg: 'Correo incorrecto'
        })
    }
}




module.exports = controller;