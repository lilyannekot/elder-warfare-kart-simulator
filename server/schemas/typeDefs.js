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

    type Query {
        getCredits(_id: ID): Character
    }

    type Mutation {
        addUser(username: String! password: String): User
        deleteUser(_id: ID): User
        addCharacter(name: String!): Character
        updateCharacter(_id: ID): Character
        updateCharacterItem(_id: ID): Character
        updateCharacterAbility(_id: ID): Character
        login(username: String! password: String): User
    }
`;

module.exports = typeDefs;