const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: String!
        updated_at_bi: String
        created_at_bi: String
        province_code: String
        health_zone: String
        health_id: String
        provider_id: String
        user_operation_unit_type: String
        username_type: String
        operation_unit_id: String
        position: String
        hash_cid: String
        c_id: String
        operator_name: String
        operator_id: String
        deleted_at: String
        updated_at: String
        created_at: String
        seq: String
    }

    type Query {
        user(id: String!): User
        usersByHealthZone(health_zone: String!): [User]
    }
`;

module.exports = typeDefs;
