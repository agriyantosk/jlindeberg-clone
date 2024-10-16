const { Product, Category, Author, Image, sequelize } = require("../models");

class ProductController {
  static async fetchProduct(req, res, next) {
    const categoryName = req.query.category;
    try {
      const product = await Product.findAll({
        include: [
          {
            model: Category,
            where: categoryName ? { name: categoryName } : {}, // Conditional filter
          },
          { model: Image },
          { model: Author },
        ],
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
      console.log(id, ">>>");
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
        res.status(200).json(product);
      }
    } catch (error) {
      next(error);
    }
  }

  static async addProduct(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { product, imgInputs } = req.body;
      const createProduct = await Product.create(
        {
          name: product.name,
          slug: product.slug,
          description: product.description,
          price: +product.price,
          mainImg: product.mainImg,
          categoryId: +product.categoryId,
          authorId: req.user.id,
        },
        {
          transaction: t,
        }
      );
      const productId = createProduct.id;
      const toDb = [];
      imgInputs.map((el) => {
        toDb.push({ productId: productId, imgUrl: el });
      });
      const createImg = await Image.bulkCreate(toDb, {
        transaction: t,
      });
      await t.commit();
      res.status(201).json({
        message: "Product has been added successfully",
      });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }

  static async editProduct(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;
      const { product, imgInputs } = req.body;
      const findProduct = await Product.findByPk(id);
      if (!findProduct) {
        throw { message: "Data not found" };
      } else {
        const createProduct = await Product.update(
          {
            name: product.name,
            slug: product.slug,
            description: product.description,
            price: +product.price,
            mainImg: product.mainImg,
            categoryId: +product.categoryId,
            authorId: req.user.id,
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
        const toDb = [];
        imgInputs.map((el) => {
          toDb.push({ productId: productId, imgUrl: el });
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
          toDb,
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
      console.log(findProduct, ">>>>>>>>");
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
      console.log(error);
      next(error);
    }
  }
}

module.exports = ProductController;
