const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const cors = require('cors')
const bearerToken = require('express-bearer-token')

const PORT = process.env.PORT || 2020


app.use(cors())//buat izin dari frontend ke backend
app.use(bearerToken())//buat token akses token
app.use(BodyParser.urlencoded({ extended: false }));//ini buat foto 
app.use(BodyParser.json())//ini gunanya buat ngirim data pake req.body
app.use(express.static('public'))//ini buat nyimpen foto

app.get('/', (req, res) => {
    return res.status(200).send('<h2>Hello from backend!</h2>')
})

const { productRouters } = require('./routes')
app.use('/product', productRouters)

app.listen(PORT, console.log(`Server berjalan di port: ${PORT}`))