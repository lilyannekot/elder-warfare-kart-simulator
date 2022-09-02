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
        addUser: async (parent, {username, password}) => {
            return await User.create({ username, password})
        }
    }
}

module.exports = resolvers