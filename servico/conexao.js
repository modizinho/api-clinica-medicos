import mysql from 'mysql2/promise';

const pool = mysql.createPool({

    host: 'localhost',
    user: 'admclinica',
    password: 'bds47',
    database: 'contatos_clinica'

});

export default pool;