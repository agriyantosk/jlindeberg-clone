const express = require("express");
const ProductController = require("../controllers/productController");
const { authentication } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", ProductController.fetchProduct);
router.get("/:id", ProductController.fetchProductById);
// router.use(authentication)
router.post("/add", ProductController.addProduct);
router.patch("/edit/:id", ProductController.editProduct);
router.delete("/delete/:id", ProductController.deleteProduct);

module.exports = router;
