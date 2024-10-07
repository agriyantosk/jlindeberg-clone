const { verifyToken } = require("../helpers/jwt");
const { Author } = require("../models")

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers;
        if (!access_token) {
            throw { name: "Invalid Token" };
        } else {
            const decodeToken = verifyToken(access_token, process.env.SECRET_KEY);
            const userFromDatabase = await Author.findOne({
                where: { id: decodeToken },
            });
            if (!userFromDatabase) {
                throw { name: "Invalid Token" };
            } else {
                req.user = { id: userFromDatabase.id };
                next();
            }
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { authentication };
