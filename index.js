const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const sequelize = require('./config/database');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connection established successfully');
        
        // Setup GraphQL server
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

        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
            console.log(`📊 GraphQL endpoint: http://localhost:${PORT}/graphql`);
        });
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
        process.exit(1);
    }
}

startServer();
