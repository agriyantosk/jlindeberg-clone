const express = require("express");
const { errorHandler } = require("../middlewares/errorhandler");
const authorRouter = require("./author")
const categoryRouter = require("./category")
const productRouter = require("./product")
const router = express.Router()

router.use("/author", authorRouter)
router.use("/category", categoryRouter)
router.use("/product", productRouter)

router.use(errorHandler)

module.exports = router