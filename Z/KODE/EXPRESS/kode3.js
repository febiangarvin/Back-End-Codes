var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// //========== BELAJAR ROUTING DENGAN EXPRESS ==========================================================// //

// app.get('/', function (req, res) { // //get berguna untuk mengambil data yang telah dibuat
//     console.log('Mendapat GET dari homepage');
//     res.send('Hello Get')
// })

// app.post('/', function (req, res) { // //post berguna untuk menaruh data yang telah dibuat ke host
//     console.log('Mendapat POST dari homepage');
//     res.send('Hello Post')
// })

// app.get('/list_user', function (req, res) { // //mengambil data dari list_user
//     console.log('Mendapat GET dari list user');
//     res.send('Hello Get dari List User')
// })

// app.get('/ko*de', function (req, res) {
//     console.log('Mendapat GET dari ko*de');
//     res.send('Hello Get Match')
// })

// var server = app.listen(8081, function () { // //buat variable server dengan angka port tujuannya
//     var host = server.address().address
//     var port = server.address().port

//     console.log('Basic Routing listening di port: ', host, port);
// })

// //========== BELAJAR MEMBUAT MIDDLEWARE DENGAN EXPRESS ===============================================// //

// app.use('/kode', function (req, res, next) {
//     console.log('START');
//     next() // //dengan next, maka akan mengarahkan ke result berikutnya
// })

// app.get('/kode', function (req, res, next) {
//     res.send('KODE MIDDLE')
//     next()
// })

// app.use('/kode', function (req, res) {
//     console.log('END');
// })

// app.listen(7878)

// //========== BELAJAR MEMBUAT SUBMIT DATA DARI HTML DENGAN EXPRESS ====================================// //

// app.get('/kode3.html', function (req, res) {
//     res.sendFile(__dirname + '/' + 'kode3.html') // //mengambil data dari file luar
// })

// app.post('/user', function (req, res) { // //menaruh data berdasarkan isi yang dibuat di body web
//     response = {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         gender: req.body.gender
//     }
//     console.log(response);
//     res.end(JSON.stringify(response)) // //mengubah ke bentuk json
// })

// var server = app.listen(8888, function () { // //variable server di web
//     var host = server.address().address
//     var port = server.address().port
//     console.log('Kode Apps listening at:', host, port);
// })