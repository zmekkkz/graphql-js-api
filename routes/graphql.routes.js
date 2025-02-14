const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../graphql/schema');
const resolvers = require('../graphql/resolvers');

async function setupGraphQLRoutes(app) {
    const server = new ApolloServer({ 
        typeDefs, 
        resolvers,
        formatError: (error) => {
            console.error('GraphQL Error:', error);
            return error;
        },
    });
    
    await server.start();
    server.applyMiddleware({ 
        app,
        path: '/graphql',
        cors: true
    });
    
    return server;
}

module.exports = setupGraphQLRoutes;
