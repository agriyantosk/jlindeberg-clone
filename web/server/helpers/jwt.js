const jwt = require("jsonwebtoken");
SECRET_KEY = 'qwerty'
const signToken = (payload) => {
    console.log(payload, ">>>");
    return jwt.sign(payload, SECRET_KEY);
};

const verifyToken = (payload) => {
    return jwt.verify(payload, process.env.SECRET_KEY);
};

module.exports = { signToken, verifyToken };
