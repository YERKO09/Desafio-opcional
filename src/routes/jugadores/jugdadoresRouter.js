const { obtenerJugadores, registrarJugador } = require('../../controllers/jugadores')
const { autMiddleware } = require('../../middleware/autMiddleware')

const router = require('express').Router()

router.get("/equipos/:teamID/jugadores", obtenerJugadores)
router.post("/equipos/:teamID/jugadores", autMiddleware, registrarJugador)

module.exports = router