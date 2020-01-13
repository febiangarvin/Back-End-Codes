const express = require(('express'))
const app = express()
const BodyParser = require('body-parser')
const PORT = 2020
const font = require('lodash')

// ========================================================================================================== //

app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())

// ========================================================================================================== //

const users = [
    {
        id: 1,
        username: 'ABC',
        email: 'abc@abc.com',
        password: '123'
    },
    {
        id: 2,
        username: 'DEF',
        email: 'def@def.com',
        password: '123'
    },
    {
        id: 3,
        username: 'GHI',
        email: 'ghi@ghi.com',
        password: '123'
    }
]

// ========================================================================================================== //

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to this project example<h1>')
})

app.get('/users', (req, res) => {
    console.log(req.query);
    const { username, password } = req.query
    if (username || password) {
        var newuser = users.filter((val) => val.username === username && val.password === password)
        if (newuser.length === 0) {
            return res.status(404).send('User Not Found')
        }
        return res.status(200).send(newuser[0])
    }
    else {
        return res.status(200).send(users)
    }
})

// ========================================================================================================== //

app.post('/users', (req, res) => {
    console.log(req.body);
    const { username, email } = req.body
    var newuser = users.filter((val) => val.username === username || val.email === email)
    if (newuser.length) {
        return res.status(500).send({ message: 'Username has already been registered' })
    }
    users.push({ ...req.body, id: users.length + 1 })
    return res.status(200).send(users)
})

// ========================================================================================================== //

app.put('/editusers/:id', (req, res) => {
    console.log(req.params.id);
    if (users[req.params.id - 1]) {
        users[req.params.id - 1] = { ...users[req.params.id - 1], password: req.body.password }
        return res.status(200).send(users[req.params.id - 1])
    }
    else {
        return res.status(404).send({ message: 'User Not Found' })
    }
})

// ========================================================================================================== //

app.delete('/usersdelete/:id', (req, res) => { // //membuat function delete data sesuai id yang dipilih
    console.log(req.params.id);
    users.splice(req.params.id - 1, 1) // //gunakan splice untuk menghapus id yang dipilih (sebelum koma), dan berapa jumlah id yang akan dihapus (setelah koma)
    return res.status(200).send(users)
})

// ========================================================================================================== //

var arrprod = [
    {
        id: 1,
        nama: 'popok hokage',
        harga: 100000,
        description: 'Siapkah bayi anda jadi hokage?'
    },
    {
        id: 2,
        nama: 'popok ngesot',
        harga: 50000,
        description: 'Dijamin bayi anda ngesot abis'
    },
    {
        id: 3,
        nama: 'popok yang tertukar',
        harga: 125000,
        description: 'Popok tiada banding'
    },
    {
        id: 4,
        nama: 'popok kena azab',
        harga: 175000,
        description: 'Anak durhaka'
    },
    {
        id: 5,
        nama: 'popok kurangajar',
        harga: 425000,
        description: 'Tukang selingkuh'
    },
    {
        id: 6,
        nama: 'popok yang mulia',
        harga: 100000,
        description: 'Sang raja'
    }
]

app.get('/diaper', (req, res) => { // //membuat function search dengan kondisi yang dimasukan (query)
    console.log(req.query);
    var { nama, harga, hargaminimal, hargamaximal } = req.query // //penulisan destructuring
    if (nama) { // //kondisi jika query yang diinput nama
        var newdatanama = arrprod.filter((val) => val.nama.includes(nama.toLowerCase()))
        return res.status(200).send(newdatanama)
    }
    else if (harga) { // //kondisi jika query yang diinput harga
        var newdataharga = arrprod.filter((val) => val.harga === parseInt(harga))
        return res.status(200).send(newdataharga)
    }
    else if (hargaminimal && hargamaximal) { // //kondisi jika query yang diinput harga minimal dan maximal (sortir harga)
        var newdataminmax = arrprod.filter((val) => val.harga >= parseInt(hargaminimal) && val.harga <= parseInt(hargamaximal))
        return res.status(200).send(newdataminmax)
    }
    else if (hargaminimal || hargamaximal) { // //kondisi jika query yang diinput harga minimal atau maximal (sortir harga)
        if (hargaminimal) { // //kondisi harga minimal
            var newdatamin = arrprod.filter((val) => val.harga >= hargaminimal)
            return res.status(200).send(newdatamin)
        }
        else if (hargamaximal) { // //kondisi harga minimal
            var newdatamax = arrprod.filter((val) => val.harga <= hargamaximal)
            return res.status(200).send(newdatamax)
        }
    }
    res.status(200).send(arrprod)
})

// ========================================================================================================== //

app.listen(PORT, () => console.log(`API Running in Port ${PORT}`))