// require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const router = require("./routers");
const { errorHandler } = require("./middlewares/errorhandler");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use(errorHandler);

//require router dengan path nya
//panggil cors dengan require disini dan panggil dengan cara use invoke //gunakan ulrencoded invoke object extended dengan value true //gunakan express json yang di invokasi agar bisa menangkap data login //gunakan router
app.listen(port, () => {
  console.log(`We are in the planet no... ${port}`);
});
