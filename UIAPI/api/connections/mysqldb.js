const mysql = require('mysql')

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'reviewmarket',
    port: '3306'
})