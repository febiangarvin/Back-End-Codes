const express = require('express') // //menggunakan module yang dibutuhkan
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({ // //menggunakan database dari mysql (gunakan data yang tepat)
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'acme'
})

db.connect() // //menghubungkan dengan database

app.get('/users', (req, res) => { // //gunakan function get dari users dengan 2 parameter (request dan response)
    const sql = 'SELECT * FROM users' // //variabel sql yang digunakan (query)

    db.query(sql, (err, result) => { // //menghubungkan database dengan query yang dibuat
        if (err) throw err
        res.send(result)
    })
})

app.listen(5000, () => console.log('Server started on PORT 5000')) // //port sebagai lokasi web