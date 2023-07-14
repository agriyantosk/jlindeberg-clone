const express = require('express')
const AuthorController = require('../controllers/authorController')
const router = express.Router()

router.post("/register", AuthorController.register)
router.post("/login", AuthorController.login)

module.exports = router