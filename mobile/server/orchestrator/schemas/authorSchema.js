const axios = require("axios");
const redis = require("../redis");
const BASE_URL_USER =
    process.env.BASE_URL_USER || "http://localhost:4001/author";

const authorSchema = `#graphql
  type Author {
    _id: String
    username: String
    email: String
    phoneNumber: String
    address: String
    password: String
    role: String
  }

  type Query {
    authors: [Author]
  }

  type Mutation {
    register(
        username: String!,
        email: String!,
        phoneNumber: String!,
        address: String!,
        password: String!): Author
  }
`;

const authorResolver = {
    Query: {
        authors: async () => {
            const cache = await redis.get("Author");
            let Author;

            if (cache) {
                Author = JSON.parse(cache);
            } else {
                const response = await axios.get(BASE_URL_USER);
                await redis.set("Author", JSON.stringify(response.data));
                Author = response.data;
            }
            return Author;
        },
    },
    Mutation: {
        register: async (_, args) => {
            const newAuthor = {
                username: args.username,
                email: args.email,
                password: args.password,
                address: args.address,
                phoneNumber: args.phoneNumber,
                role: args.role,
            };
            const response = await axios.post(
                BASE_URL_USER + "/add",
                newAuthor
            );
            return response.data;
        },
    },
};

module.exports = { authorSchema, authorResolver };
