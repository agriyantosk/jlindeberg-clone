'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Author.hasMany(models.Product, { foreignKey: 'authorId' })
    }
  }
  Author.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          message: "Username is required"
        },
        notEmpty: {
          message: "Username is required"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          message: "Email is required"
        },
        notEmpty: {
          message: "Email is required"
        },
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          message: "Password is required"
        },
        notEmpty: {
          message: "Password is required"
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          message: "Phone Number is required"
        },
        notEmpty: {
          message: "Phone Number is required"
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          message: "Address is required"
        },
        notEmpty: {
          message: "Address is required"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Author',
  });
  Author.beforeCreate((user, options) => {
    const hash = hashPassword(user.password)
    user.password = hash
  })
  return Author;
};