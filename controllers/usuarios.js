const { registrarUsuario } = require('../db/consultas')

const agregarUsuario = async (req, res) => {
    try {
        const usuario = req.body
        await registrarUsuario(usuario)
        res.send("Usuario creado con éxito")
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { agregarUsuario }