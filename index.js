const express = require('express');
const sequelize = require('./config/database');
const setupGraphQLRoutes = require('./routes');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connection established successfully');
        
        // Setup GraphQL routes
        await setupGraphQLRoutes(app);

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
