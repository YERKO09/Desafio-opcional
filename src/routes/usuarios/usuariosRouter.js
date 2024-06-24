const { obtenerUsuarios, agregarUsuario } = require('../../controllers/usuarios')

const router = require('express').Router()

router.get("/usuarios", obtenerUsuarios)
router.post("/usuarios", agregarUsuario)

module.exports = router