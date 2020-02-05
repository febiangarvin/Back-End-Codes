const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

//create app
const app = express()

//test connection
const { mysqldb } = require('./connection')
mysqldb.connect(err => {
    if (err) throw err
    console.log('mysql connected')
})

//set cors-- buat cross policy
app.use(cors())

//set middleware
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

//set routes
app.get('/', (req, res) => {
    return res.status(200).send('hello from server side')
})
const { authRouters, adminRouters } = require('./routes')
app.use('/auth', authRouters)
app.use('/admin', adminRouters)

//set port
const PORT = 6969
app.listen(PORT, console.log('sever running on port' + PORT))