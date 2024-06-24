const { obtenerEquipos, agregarEquipo } = require('../../controllers/equipos')
const { autMiddleware } = require('../../middleware/autMiddleware')

const router = require('express').Router()

router.get("/equipos", obtenerEquipos)
router.post("/equipos", autMiddleware, agregarEquipo)

module.exports = router