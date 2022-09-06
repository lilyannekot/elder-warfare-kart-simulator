const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        email: String!
        password: String!
    }

    type Item {
        name: String
        description: String
    }

    type Ability {
        name: String
        description: String
    }

    type Query {
        users: [User]
    }

    type Mutation {
        addUser(email: String! password: String): User
        deleteUser(_id: ID): User
        login(username: String! password: String): User
    }
`;

module.exports = typeDefs;