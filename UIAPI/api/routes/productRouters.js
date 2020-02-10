const express = require('express')
const { productControllers } = require('../controllers')
const router = express.Router()

router.post('/addproduct', productControllers.postproducts)

module.exports = router