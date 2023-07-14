const { Product, Category, Author, Image, sequelize } = require("../models");

class ProductController {
    static async fetchProduct(req, res, next) {
        try {
            const product = await Product.findAll({
                include: [{ model: Category }, { model: Image }],
            });
            if (!product) {
                throw { message: "Data not found" };
            } else {
                res.status(200).json(product);
            }
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async fetchProductById(req, res, next) {
        try {
            const { id } = req.params;
            const product = await Product.findOne({
                include: [
                    {
                        model: Image,
                    },
                    {
                        model: Category,
                    },
                ],
                where: {
                    id,
                },
            });
            if (!product) {
                throw { message: "Data not found" };
            } else {
                console.log(product.Images, ">>>>>>");
                res.status(200).json(product);
            }
        } catch (error) {
            next(error);
        }
    }

    static async addProduct(req, res, next) {
        const t = await sequelize.transaction();
        try {
            const images = req.body.images;
            const createProduct = await Product.create(
                {
                    name: req.body.name,
                    slug: req.body.name.replaceAll(" ", "-"),
                    description: req.body.description,
                    price: +req.body.price,
                    mainImg: req.body.mainImg,
                    categoryId: +req.body.categoryId,
                    mongoId: req.body.mongoId,
                },
                {
                    transaction: t,
                }
            );
            const productId = createProduct.id;
            const imagesPayload = [];
            images.map((el) => {
                imagesPayload.push({ productId: productId, imgUrl: el });
            });
            const createImg = await Image.bulkCreate(imagesPayload, {
                transaction: t,
            });
            await t.commit();
            res.status(201).json({
                message: "Product has been added successfully",
            });
        } catch (error) {
            console.log(error);
            await t.rollback();
            next(error);
        }
    }

    static async editProduct(req, res, next) {
        const t = await sequelize.transaction();
        try {
            const { id } = req.params;
            const images = req.body.images;
            const findProduct = await Product.findByPk(id);
            if (!findProduct) {
                throw { message: "Data not found" };
            } else {
                const createProduct = await Product.update(
                    {
                        name: req.body.name,
                        slug: req.body.name.replaceAll(" ", "-"),
                        description: req.body.description,
                        price: +req.body.price,
                        mainImg: req.body.mainImg,
                        categoryId: +req.body.categoryId,
                        mongoId: req.body.mongoId,
                    },
                    {
                        where: {
                            id: id,
                        },
                    },
                    {
                        transaction: t,
                    }
                );
                const productId = findProduct.id;
                const imagesPayload = [];
                images.map((el) => {
                    imagesPayload.push({ productId: productId, imgUrl: el });
                });
                const deleteImg = await Image.destroy({
                    where: {
                        productId,
                    },
                });
                if (!deleteImg) {
                    throw { message: "Data not found" };
                }
                const updateImg = await Image.bulkCreate(
                    imagesPayload,
                    { updateOnDuplicate: ["id"] },
                    { transaction: t }
                );
                res.status(201).json({
                    message: "Product has been edited Successfully",
                });
            }
        } catch (error) {
            next(error);
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            const { id } = req.params;
            const findProduct = await Product.findByPk(id);
            if (!findProduct) {
                throw { message: "Data not found" };
            } else {
                const deleteImg = await Image.destroy({
                    where: {
                        productId: findProduct.id,
                    },
                });
                res.status(200).json({
                    message: "Product has been deleted successfully",
                });
                const product = await Product.destroy({
                    where: {
                        id,
                    },
                });
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ProductController;
