const {Category} = require("../models")

class CategoryController {
    static async fetchCategory(req, res, next) {
        try {
            const category = await Category.findAll({})
            if (!category) {
                throw {message: "Data not found"}
            } else {
                res.status(200).json(category)
            }
        } catch (error) {
            next(error)
        }
    }

    static async addCategory(req, res, next) {
        try {
            const category = await Category.create({
                name: req.body.name
            })
            res.status(201).json(category)
        } catch (error) {
            next(error)
        }
    }

    static async deleteCategory(req, res, next) {
        try {
            console.log(req.params.id)
            const category = Category.destroy({
                where: {
                    id: req.params.id
                }
            })
            if (!category) {
                throw {message: "Data not found"}
            } else {
                res.status(200).json(category)
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CategoryController