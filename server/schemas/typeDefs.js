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
`

module.exports = typeDefs