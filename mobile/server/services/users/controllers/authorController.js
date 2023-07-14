const { ObjectId } = require("mongodb");
const { getDb } = require("../config/mongodb");
const { hashPassword } = require("../helpers/bcrypt");
const collection = getDb().collection("authors");

class AuthorController {
    static async findAuthor(req, res, next) {
        try {
            const response = await collection.find().toArray();
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    static async register(req, res, next) {
        try {
            const { username, email, password, phoneNumber, address } =
                req.body;
            if (!username || !email || !password || !phoneNumber || !address) {
                throw { name: "Invalid Input" };
            } else {
                const doc = {
                    username,
                    email,
                    password: hashPassword(password),
                    role: "admin",
                    phoneNumber,
                    address,
                };
                const result = await collection.insertOne(doc);
                doc._id = result.insertedId;
                res.status(201).json(doc);
            }
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
    static async findById(req, res, next) {
        try {
            const id = req.params.id;
            const response = await collection.findOne({
                _id: new ObjectId(id),
            });
            if (!response) {
                throw { message: "Data not found" };
            } else {
                res.status(200).json(response);
            }
        } catch (error) {
            next(error);
        }
    }

    static async deleteById(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw { name: "Data not found" };
            } else {
                const response = await collection.deleteOne({
                    _id: new ObjectId(id),
                });
                res.status(200).json(response);
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AuthorController;
