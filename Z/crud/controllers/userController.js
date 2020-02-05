const db = require('../connections/index')

module.exports = {
    // //1. Create Data Store
    userCreateStore: (req, res) => {
        console.log(req.body);
        // //get data from frontend
        let { storeName } = req.body

        // //set data fro database
        let data = {
            storeName
        }

        // //syntax SQL
        let sql = `INSERT INTO store SET ?`;

        // //database action
        db.query(sql, data, (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },

    // //2. Get Data Store
    userGetStore: (req, res) => {
        // //syntax sql
        let sql = `SELECT * FROM store`

        // //database action
        db.query(sql, (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },

    // //3. Update Data Store
    userUpdateStore: (req, res) => {
        // //get data from frontend
        let { storeId, storeName } = req.body

        // //set data for database
        let data = {
            storeId, // //storeId (nama kolom) : req.body.storeId (value kolom)
            storeName // //storeName (nama kolom) : req.body.storeName (value kolom)
        }

        // //syntax sql
        let sql = `UPDATE store SET ? WHERE storeId = ?`

        // //database action
        db.query(sql, [data, storeId], (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },

    // //4. Delete Data Store dan Product (with constraint method)
    userDeleteData: (req, res) => {
        // //get id store from backend
        const storeId = req.params.id
        console.log(storeId);

        // //set data for database
        let data = {
            storeId
        }

        // //syntax sql
        let sql = `DELETE FROM store WHERE storeId = ${storeId}`

        // //database action
        db.query(sql, (err, result) => {
            // console.log(err);
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },

    // //5. Insert Data to Product
    userAddProduct: (req, res) => {
        // //get data from frontend
        const { storeId, productName, productPrice } = req.body

        // //set data to database
        let data = {
            storeId, // //storeId (nama kolom) : req.body.storeId (value kolom)
            productName, // //productName (nama kolom) : req.body.productName (value kolom)
            productPrice // //productPrice (nama kolom) : req.body.productPrice (value kolom)
        }

        // //syntax sql
        let sql = 'INSERT INTO product SET ?'

        // //database action
        db.query(sql, [data], (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },

    // //6. Update Data Product
    userUpdateProduct: (req, res) => {
        // //get data from frontend
        const { productId, storeId, productName, productPrice } = req.body

        // //set data to database
        let data = {
            // //storeId (nama kolom) : req.body.storeId (value kolom)
            storeId,
            productName, // //productName (nama kolom) : req.body.productName (value kolom)
            productPrice // //productPrice (nama kolom) : req.body.productPrice (value kolom)
        }

        // //syntax sql
        let sql = `UPDATE product SET ? WHERE productId = ${productId}`

        // //database action
        db.query(sql, [data], (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
}