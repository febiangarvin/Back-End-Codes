module.exports = { // //module untuk messages
    getMessages: (req, res) => { // //mengambil messages
        res.status(200).send(req.app.arrMsg)
    },
    sendMessages: (req, res) => { // //mengirim messages
        req.app.arrMsg.push(req.body) // //melakukan push dari body web dengan data yang telah diisi
        req.app.io.emit('chat message', req.app.arrMsg)
        res.status(200).send({ message: 'Send Message Success' })
    },
    clearMessages: (req, res) => { // //menghapus messages
        req.app.arrMsg = [] // //membuat array messages kosong
        req.app.io.emit('chat message', req.app.arrMsg)
        res.status(200).send({ message: 'Clear Message Success' })
    }
}