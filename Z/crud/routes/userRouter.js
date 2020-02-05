// //import MODULE
const express = require('express')
const router = express.Router()
const { userControllers } = require('../controllers')

// //create STORE -- API (users/create-store)
router.post('/create-store', userControllers.userCreateStore)

// //get STORE -- API (users/get-store)
router.get('/get-store', userControllers.userGetStore)

// //update STORE -- API (users/update-store)
router.put('/update-store', userControllers.userUpdateStore)

// //delete data store & product -- API (users/delete-data)
router.delete('/delete-store/:id', userControllers.userDeleteData)

// //create data product -- API (users/add-product)
router.post('/add-product', userControllers.userAddProduct)

// //update PRODUCT -- API (users/update-store)
router.put('/update-product', userControllers.userUpdateProduct)

module.exports = router