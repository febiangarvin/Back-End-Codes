// //#1
const express = require('express')
const app = express()
const http = require('http')
const socketIO = require('socket.io') // //module untuk membantu fitur real-time (tanpa perlu refresh)
const bodyParser = require('body-parser')
const cors = require('cors')

const port = process.env.port || 1997 // //port pada web browser

app.use(bodyParser.json())
app.use(cors())
const server = http.createServer(app)
const io = socketIO(server) // //variable socket

var arrMsg = [] // //buat variable dengan array kosong untuk menampung data (message)
var userCount = 0 // //buat variable jumlah user awal, yakni 0

app.io = io
app.arrMsg = arrMsg

app.get('/', (req, res) => {
    res.status(200).send(`<h1>Welcome to API SOCKET.IO</h1>`)
})

const { chatRouter } = require('./routers')

app.use('/chat', chatRouter)

io.on('connection', socket => { // //function untuk menjalankan socket yang diindikasikan di web browser user
    console.log('user connected'); // //apabila ter-connect atau user sedang masuk ke halaman
    userCount += 1 // //maka user bertambah 1, dan akan terus bertambah tergantung berapa banyak user yang masuk ke web
    io.emit('user connected', userCount)

    socket.on('disconnect', () => { // //function untuk disconnect
        console.log('User Disconnected');
        userCount-- // //aoabila user meninggalkan web, maka user count berkurang
        io.emit('user connected', userCount)
    })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
