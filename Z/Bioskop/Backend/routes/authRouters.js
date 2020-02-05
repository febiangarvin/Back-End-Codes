const express = require('express')
const router = express.Router()
const { authControllers } = require('./../controllers')

//action buat register
router.post('/register', authControllers.registerUser)
router.post('/login', authControllers.loginUser)

module.exports = router