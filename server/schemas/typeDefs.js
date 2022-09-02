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
        Items: [String]
        Abilities: [String]
    }
`

module.exports = typeDefs