// //========== REQUIRED MODULES ========================================================================// //
const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()

// //========== REQUIRED PAGES ==========================================================================// //
const logger = require('./middleware/logger')
const members = require('./Members')

// //========== MIDDLEWARE ==============================================================================// //

// app.use(logger) // //menggunakan logger dari file middleware

app.engine('handlebars', exphbs({ defaultLayout: 'main' })) // //menggunakan handlebars dari file views
app.set('view engine', 'handlebars')

app.use(express.json()) // //menggunakan body-parser untuk mengambil query dari body html
app.use(express.urlencoded({ extended: false }))

// //========== ROUTES ==================================================================================// //

app.get('/', (req, res) => res.render('index', { // //mengambil data, kemudian melakukan render (ditambah di handlebars)
    title: 'Member App',
    members
}))

app.use('/api/members', require('./api/members')) // //mengambil routes di folder api

// //========== PORTS ===================================================================================// //

const PORT = process.env.PORT || 5000 // //jika tidak tersedia pada PORT environment, maka akan dijalankan di port ke 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) // //notifikasi pada terminal mengenai status port