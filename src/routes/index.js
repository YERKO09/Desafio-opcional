const router = require('express').Router()
const UsuariosRouter = require('./usuarios/usuariosRouter')
const JugadoresRouter = require('./jugadores/jugdadoresRouter')
const EquiposRouter = require('./equipos/equiposRouter')
const LoginRouter = require('./login')

router.use(EquiposRouter)
router.use(UsuariosRouter)
router.use(JugadoresRouter)
router.use(LoginRouter)

module.exports = router