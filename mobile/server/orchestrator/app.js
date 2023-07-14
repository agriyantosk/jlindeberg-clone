const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { productSchema, productResolver } = require("./schemas/productSchema");
const { authorSchema, authorResolver } = require("./schemas/authorSchema");

const server = new ApolloServer({
    typeDefs: [productSchema, authorSchema],
    resolvers: [productResolver, authorResolver],
});

startStandaloneServer(server, {
    listen: { port: process.env.PORT || 4000 },
}).then(({ url }) => console.log(`🚀  Server ready at: ${url}`));
