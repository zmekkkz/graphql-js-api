const User = require('../models/User');

const resolvers = {
    Query: {
        user: async (_, { id }) => {
            try {
                return await User.findByPk(id);
            } catch (error) {
                console.error('Error fetching user:', error);
                throw new Error('Failed to fetch user');
            }
        },
        usersByHealthZone: async (_, { health_zone }) => {
            try {
                return await User.findAll({ where: { health_zone } });
            } catch (error) {
                console.error('Error fetching users:', error);
                throw new Error('Failed to fetch users');
            }
        },
    },
};

module.exports = resolvers;
