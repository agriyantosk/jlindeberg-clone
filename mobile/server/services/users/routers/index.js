const express = require("express");
const { errorHandler } = require("../middlewares/errorHandler");
const authorRouter = require("./author");
const router = express.Router();

router.use("/author", authorRouter);
router.use(errorHandler);

module.exports = router;
