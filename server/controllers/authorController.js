const { checkPassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { Author } = require("../models");

class AuthorController {
    static async register(req, res, next) {
        try {
            const register = await Author.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber,
                address: req.body.address,
            });
            res.status(201).json(register);
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        try {
            const user = await Author.findOne({
                where: {
                    email: req.body.email,
                },
            });
            if (!user) {
                throw { name: "Invalid email/password" };
            } else {
                const access = checkPassword(req.body.password, user.password);
                if (!access) {
                    throw { message: "Invalid email/password" };
                } else {
                    const access_token = signToken(user.id);
                    res.status(200).json(access_token);
                }
            }
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = AuthorController;
