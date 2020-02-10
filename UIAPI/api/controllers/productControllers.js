const { db } = require('../connections')
const { uploader } = require('./../helper/uploader')
const fs = require('fs')

module.exports = {
    postproducts: (req, res) => {
        console.log(req.body);
        var sql = `INSERT into PRODUCT set ?`
        db.query(sql, req.body, (err, result) => {
            if (err) return res.status(500).send(err)
            console.log('masuk');
            console.log(result);
            sql = 'SELECT * from PRODUCT'
            db.query(sql, (err1, result1) => {
                if (err1) return res.status(500).send(err1)
                console.log(result1);
                return res.status(200).send(result1)
            })
        })
    },
    posttranskasi: (req, res) => {
        try {
            const path = '/transaksi/images'
            const upload = uploader(path, 'TRANS').fields([{ name: 'image' }])
            upload(req, res, (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Upload picture failed !', error: err.message });
                }
                console.log('lewat')
                const { image } = req.files;
                console.log(image)
                const imagePath = image ? path + '/' + image[0].filename : null;
                console.log(imagePath)

                console.log(req.body.data)
                const data = JSON.parse(req.body.data);
                console.log(data)
                data.paymentimg = imagePath;
                data.tanggal = new Date()
                data.status = 'onwaitingPay'
                console.log(data)

            })
        } catch (error) {

        }
    }
}