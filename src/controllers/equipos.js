const { getTeams, addTeam } = require('../db/consultas')

const obtenerEquipos = async (req, res) => {
    const equipos = await getTeams()
    res.json(equipos)
}

const agregarEquipo = async (req, res) => {
    try {
        const equipo = req.body
        await addTeam(equipo)
        res.send({ message: "Equipo agregado con éxito" })
    } catch (error) {
        console.log('error', error);
        
        throw error
    }
    
}

module.exports = { obtenerEquipos, agregarEquipo }