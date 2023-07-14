const jwt = require("jsonwebtoken");

const signToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET_KEY);
};

const verifyToken = (payload) => {
    return jwt.verify(payload, process.env.SECRET_KEY);
};

module.exports = { signToken, verifyToken };