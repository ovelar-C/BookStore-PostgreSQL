const pg = require('pg');
require ('dotenv').config ();

const {Pool} = pg
const pool = new Pool({
    host: process.env.DB_HOST ,
    port: process.env.DB_PORT,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME,
    max : 10
});
 
pool.query('SELECT 1 + 1 AS solucion')
    .then(result =>{
        console.log('DB conectada. test query:', result.rows[0].solucion);
    })
    .catch(error => {
        console.error('ERROR al conectar a DB:', error.message);
    });

module.exports = pool;