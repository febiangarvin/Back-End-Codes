const express = require('express')
const router = express.Router()
const members = require('../Members')
const uuid = require('uuid')

router.get('/', (req, res) => res.json(members)) // //route untuk memanggil semua data member

router.get('/:id', (req, res) => { // //route untuk memanggil member berdasarkan id
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id))) // //jika id tersedia
    } else {
        res.status(400).json({ message: `No member with the id of ${req.params.id} detected` }) // //jika id tidak tersedia
    }
})

router.post('/', (req, res) => { // //route untuk membuat member baru
    const newMember = {
        id: uuid.v4(), // //module yang membuat sebuah angka acak
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email) { // //kondisi jika salah satu data tidak diisi
        return res.status(400).json({ msg: 'Please complete the form' })
    }
    members.push(newMember) // //melakukan push data new members ke members
    // res.json(members) // //jika hanya ingin menampilkan bentuk json pada web
    res.redirect('/') // //jika ingin menampilkan bentuk data dengan form pada web
})

router.put('/:id', (req, res) => { // //route untuk memperbarui data member
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) { // //jika id yang dimasukan ada
        const updMember = req.body // //isi data update bergantung pada isi yang dibuat pada api/postman
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({ msg: 'Member Updated', member })
            }
        })
    } else { // //jika id tidak ditemukan
        res.status(400).json({ message: `No member with the id of ${req.params.id} detected` })
    }
})

router.delete('/:id', (req, res) => { // //route untuk menghapus member
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) { // //jika id ditemukan
        res.json({
            msg: 'Member Deleted',
            members: members.filter(member => member.id !== parseInt(req.params.id)) // //mem-filter array members
        })
    } else { // //jika id tidak ditemukan
        res.status(400).json({ message: `No member with the id of ${req.params.id} detected` })
    }
})

module.exports = router