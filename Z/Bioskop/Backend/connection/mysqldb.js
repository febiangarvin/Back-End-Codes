const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'bioskop',
    port: '3306',
    multipleStatements: true
})

module.exports = db