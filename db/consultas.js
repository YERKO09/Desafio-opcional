const pool = require('./dbconfig')
const bcrypt = require('bcrypt')

const verificarCredenciales = async (username, password) => {

    const consulta = "SELECT * FROM usuarios WHERE username = $1;"
    const values = [username]
    const { rowCount, rows } = await pool.query(consulta, values)
    
    const user = rows[0]
  // console.log(user);
  
    const match = await bcrypt.compare(String(password), user.password)
    // console.log(String(password), user.password);
    // console.log('match:',match);
    
    if ( !match || !rowCount)
        throw { code: 401, message: "Error de credenciales" }
}

const getTeams = async () => {
    const query = "SELECT * FROM equipos;"
    const {rows} = await pool.query(query);
    // console.log('Rows:', rows);   
    return rows
}

const getPlayers = async (teamID) => {
    const query = `SELECT j.name, p.name AS "posicion"
        FROM jugadores j
        INNER JOIN posiciones p 
        ON p.id = j.position
        WHERE j.id_equipo = $1
        ORDER BY j.name;`
    const values = [teamID];
    const { rows } = await pool.query(query, values);
    // console.log('Rows:', rows);   
    return rows
}

const addTeam = async (equipo) => {

    try {
        const { name } = equipo
        const consulta = "INSERT INTO equipos (id, name) values (DEFAULT, $1) RETURNING *;"
        const values = [name]

        const { rowCount } = await pool.query(consulta, values)  

        if (rowCount) {

            return {
                msg: 'Equipo agregado ✅'
            }

        } else {
            return {
                msg: 'Error al agregar el equipo ❌'
            }
        }
    } catch (error) {
        console.log(error);
        throw error  
    }
    
}

const addPlayer = async ({ jugador, teamID }) => {
    try {
        const { name, position } = jugador
        const consulta = "INSERT INTO jugadores (id, id_equipo, name, position) values (DEFAULT, $1, $2, $3) RETURNING *;"
        const values = [teamID, name, position]

        const { rowCount } = await pool.query(consulta, values)  

        if (rowCount) {

            return {
                msg: 'Equipo agregado ✅'
            }

        } else {
            return {
                msg: 'Error al agregar el equipo ❌'
            }
        }
    } catch (error) {
        console.log(error);
        throw error  
    }
}

const registrarUsuario = async (usuario) => {

    try {
        let { username, password } = usuario
        const passwordEncriptada = await bcrypt.hash(String(password), 10)
        console.log(passwordEncriptada);
        password = passwordEncriptada
        const values = [username, passwordEncriptada]
        const consulta = "INSERT INTO usuarios values (DEFAULT, $1, $2) RETURNING *;"
        const { rowCount } = await pool.query(consulta, values)  

        if (rowCount) {

            return {
                msg: 'Equipo agregado ✅'
            }

        } else {
            return {
                msg: 'Error al agregar el equipo ❌'
            }
        }
    } catch (error) {
        console.log(error);
        throw error
    }
    
}

module.exports = { getTeams, addTeam, getPlayers, addPlayer, verificarCredenciales, registrarUsuario }