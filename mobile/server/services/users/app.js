const express = require("express");
const { run } = require("./config/mongodb");
const { errorHandler } = require("./middlewares/errorHandler");
const routers = require("./routers");
const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routers);
app.use(errorHandler);

run().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
});
