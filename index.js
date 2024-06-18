const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const secretKey = require('./utils/utils')
require('dotenv').config();

app.listen(process.env.PORT, console.log("SERVER ON"));
app.use(express.json())

const { obtenerJugadores, registrarJugador } = require('./controllers/jugadores')
const { obtenerEquipos, agregarEquipo } = require('./controllers/equipos')
const { agregarUsuario } = require('./controllers/usuarios')
const { verificarCredenciales } = require('./db/consultas')
const { autMiddleware } = require('./middleware/autMiddleware')

app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body
        await verificarCredenciales(username, password)
        // console.log(secretKey);

        const token = jwt.sign({ username }, secretKey)
        // console.log(token);
        
        res.send({token})
    } catch (error) {
        console.log(error)
        res.status(error.code || 500).send(error)
    }
})

app.get("/equipos", obtenerEquipos)
app.post("/equipos", autMiddleware, agregarEquipo)

app.get("/equipos/:teamID/jugadores", obtenerJugadores)
app.post("/equipos/:teamID/jugadores", autMiddleware, registrarJugador)

app.post("/usuarios", agregarUsuario)

module.exports = app


