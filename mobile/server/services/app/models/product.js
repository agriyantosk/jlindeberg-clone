"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.belongsTo(models.Category, { foreignKey: "categoryId" });
            // Product.belongsTo(models.Author, { foreignKey: "authorId" });
            Product.hasMany(models.Image, { foreignKey: "productId" });
        }
    }
    Product.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Product Name is required",
                    },
                    notEmpty: {
                        message: "Product Name is required",
                    },
                },
            },
            slug: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Slug is required",
                    },
                    notEmpty: {
                        message: "Slug is required",
                    },
                },
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Description is required",
                    },
                    notEmpty: {
                        message: "Description is required",
                    },
                },
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Price is required",
                    },
                    notEmpty: {
                        message: "Price is required",
                    },
                },
            },
            mainImg: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Main Image URL is required",
                    },
                    notEmpty: {
                        message: "Main Image URL is required",
                    },
                },
            },
            categoryId: DataTypes.INTEGER,
            mongoId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
