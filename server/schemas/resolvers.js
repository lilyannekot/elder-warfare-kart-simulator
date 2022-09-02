const { Character, StoreFront, User} = require("./models")

const resolvers = {
    Query: {
        getCharacter: async (parent, args) => {
            return await Character.findById(args._id)
        },
        getStore: async (parents, args) => {
            return await Store.findById(args._id)
        }
    },
    Mutation: {
        
    }
}

module.exports = resolvers