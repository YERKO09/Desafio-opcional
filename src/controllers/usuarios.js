const { registrarUsuario, getUsers } = require('../db/consultas')

const obtenerUsuarios = async (req, res) => {
    const usuario = await getUsers()
    res.json(usuario)
}

const agregarUsuario = async (req, res) => {
    try {
        const usuario = req.body
        await registrarUsuario(usuario)
        res.send("Usuario creado con éxito")
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { agregarUsuario, obtenerUsuarios }