const axios = require("axios");
const redis = require("../redis");
const BASE_URL_PRODUCT =
    process.env.BASE_URL_PRODUCT || "http://localhost:4002/product";

const productSchema = `#graphql
  type Category {
    id: Int
    name: String
  }

  type Images {
    id: Int
    productId: Int
    imgUrl: String
  }

  type Product {
    id: Int
    name: String
    slug: String
    description: String
    price: Int
    mainImg: String
    categoryId: Int
    mongoId: String
    Images: [Images]
    Category: Category
  }

  type AddProductResponse {
    message: String!
  }

  type EditProductResponse {
    message: String!
  }

  type DeleteProductResponse {
    message: String!
  }

  type Query {
    products: [Product]
    productById(id: ID): Product
  }

  type Mutation {
    addProduct(name: String!, description: String!, price: Int!, mainImg: String!, categoryId: Int!, mongoId: String!, images: [String!]): AddProductResponse
    editProduct(id: ID, name: String!, description: String!, price: Int!, mainImg: String!, categoryId: Int!, mongoId: String!, images: [String!]): EditProductResponse
    deleteProduct(id: ID): DeleteProductResponse
  }
`;

const productResolver = {
    Query: {
        products: async () => {
            const cache = await redis.get("Product");
            let Product;

            if (cache) {
                Product = JSON.parse(cache);
            } else {
                const response = await axios.get(BASE_URL_PRODUCT);
                await redis.set("Product", JSON.stringify(response.data));
                Product = response.data;
            }
            return Product;
        },
        productById: async (parent, args) => {
            await redis.del("productById");
            const cache = await redis.get("productById");
            let productById;
            const id = args.id;

            if (cache) {
                productById = JSON.parse(cache);
            } else {
                const response = await axios.get(BASE_URL_PRODUCT + `/${id}`);
                await redis.set("productById", JSON.stringify(response.data));
                productById = response.data;
            }
            return productById;
        },
    },
    Mutation: {
        addProduct: async (_, args) => {
            const newProduct = {
                name: args.name,
                slug: args.slug,
                description: args.description,
                price: args.price,
                mainImg: args.mainImg,
                categoryId: args.categoryId,
                mongoId: args.mongoId,
                images: args.images,
            };
            const response = await axios.post(
                BASE_URL_PRODUCT + "/add",
                newProduct
            );
            console.log(response.data);
            return response.data;
        },
        editProduct: async (_, args) => {
            const id = args.id;
            const editedProduct = {
                name: args.name,
                slug: args.slug,
                description: args.description,
                price: args.price,
                mainImg: args.mainImg,
                categoryId: args.categoryId,
                mongoId: args.mongoId,
                images: args.images,
            };
            const response = await axios.patch(
                BASE_URL_PRODUCT + `/edit/${id}`,
                editedProduct
            );
            return response.data;
        },
        deleteProduct: async (_, args) => {
            const id = args.id;
            const response = await axios.delete(
                BASE_URL_PRODUCT + `/delete/${id}`
            );
            return response.data;
        },
    },
};

module.exports = { productSchema, productResolver };
