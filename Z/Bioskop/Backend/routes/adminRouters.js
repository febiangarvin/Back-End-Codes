const express = require('express')
const router = express.Router()
const { adminControllers } = require('./../controllers')

//action tambah movie
router.post('/addmovie', adminControllers.addMovie)
router.post('/addgenre', adminControllers.addGenre)
router.post('/addstudio', adminControllers.addStudio)
router.post('/addjadwal', adminControllers.addJadwal)
router.post('/editmovies/:id', adminControllers.editMovie)
router.post('/editgenre/', adminControllers.editGenre)

module.exports = router