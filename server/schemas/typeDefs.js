const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        email: String!
        password: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(email: String!): User
    }

    type Mutation {
        addUser(email: String, password: String!): Auth
        deleteUser(_id: ID): User
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;