require('dotenv').config();
const { Pool } = require('pg')

const { DBHOST, DBUSER, DBPASSWORD, DBNAME } = process.env;

const pool = new Pool({
    host: DBHOST,
    user: DBUSER,
    password: DBPASSWORD,
    database: DBNAME,
    allowExitOnIdle: true
})

module.exports = pool;