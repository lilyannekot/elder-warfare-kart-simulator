const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        password: String!
        character: Character
    }

    type Character {
        _id: ID
        name: String!
        hp: Int
        damage: Int
        hitChance: Float
        dodge: Float
        credits: Int
        items: [Item]
        abilities: [Ability]
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
        getCharacter(_id: ID): Character
        getCredits(_id: ID): Character
    }

    type Mutation {
        addUser(username: String! password: String): User
        deleteUser(_id: ID): User
        addCharacter(name: String!): Character
        // updateCharacter(_id: ID): Character
        updateChracterItem(_id: ID): Character
        updateAbility(_id: ID): Character
    }
`

module.exports = typeDefs