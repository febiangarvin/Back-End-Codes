const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

const apiKey = '03ad7bc1e164e9154a9c066681ae164d' // //key di dapat dari web api setelah mendaftar (di email)

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', function (req, res) { // //mengambil data
    res.render('index', { weather: null, error: null })
})

app.post('/', function (req, res) { // //melakukan post data
    let city = req.body.city // //variable dari data yang kita ketik
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}` // //variable urs untuk menyseuaikan key dan city dari web api
    request(url, function (err, response, body) { // //melakukan request dari variable url
        if (err) { // //jika error
            res.render('index', { weather: null, error: 'Error, please try again' })
        }
        else {
            let weather = JSON.parse(body) // //hasil data weather dari data yang kita tulis
            if (weather.main == undefined) {
                res.render('index', { weather: null, error: 'Error, please try again' })
            }
            else { // //jikaberhasil
                let weatherText = `It is ${weather.main.temp} degrees in ${weather.name}!`
                res.render('index', { weather: weatherText, error: null })
            }
        }
    })
})

app.listen(3000, function () { // //lokasi port di web
    console.log('Kode Weather listening on port 3000');
})