const express = require("express");
const AuthorController = require("../controllers/authorController");
const routers = express.Router();

routers.get("/", AuthorController.findAuthor);
routers.post("/add", AuthorController.register);
routers.get("/:id", AuthorController.findById);
routers.delete("/delete/:id", AuthorController.deleteById);

module.exports = routers;
