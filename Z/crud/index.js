const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// //create APP
const app = express()

// //test connection dengan DB
const db = require('./connections/index')
db.connect(err => {
    if (err) throw err
    console.log('MySQL Connected .......');
})

// //set MIDDLEWARE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// //set CORS untuk mengakses frontend ke backend
app.use(cors())

// //set API backend
const { userRouter } = require('./routes')
app.get('/', (req, res) => res.send('Hello from backend!'))
app.use('/users', userRouter)

// //set PORT
const PORT = process.env.PORT || 4000
app.listen(PORT, console.log(`Server berjalan di port: ${PORT}`))