const express = require('express')
const CategoryController = require('../controllers/categoryController')
const { authentication } = require('../middlewares/authentication')
const router = express.Router()

router.get("/", CategoryController.fetchCategory)
router.use(authentication)
router.post("/add", CategoryController.addCategory)
router.delete("/delete/:id", CategoryController.deleteCategory)

module.exports = router