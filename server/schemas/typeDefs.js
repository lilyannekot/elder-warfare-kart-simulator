const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        password: String!
        character: Character
    }

    type Character{
        _id: ID
        name: String!
        stats: {
            hp: Int
            damage: Int
        }
        credits: Int
        items: [String]
        abilities: [String]
    }

    type Store {
        _id: ID
        items: [String]
        abilities: [String]
    }

    type Query {
        getCharacter(_id: ID): Character
        getStore(_id: ID): Store
    }

    type Mutation {
        addUser(username: String! password: String): User
        deleteUser(_id: ID): User
        addCharacter(name: String!): Character
        updateCharacter(_id: ID ): Character
        updateItem(_id: ID): Character
        updateAbility(_id: ID): Character
    }
`

module.exports = typeDefs