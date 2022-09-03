const { Character, StoreFront, User} = require("./models")

const resolvers = {
    Query: {
        getCharacter: async (parent, args) => {
            return await Character.findById(args._id)
        },
        getCredits: async (parent, args) => {
            return await Character.findById(args._id)
        }
    },
    Mutation: {
        addUser: async (parent, {username, password}) => {
            return await User.create({ username, password})
        },
        deleteUser: async (parent, { userId}) => {
            return await User.findOneAndDelete({_id: userId})
        },
        addCharacter: async (parent, { name }) =>{
            return await Character.create({ name })
        },
        updateCharacter: async (parent, { characterId }) => {
            return await Character.findOneAndUpdate({ _id: characterId})
        },
        updateItem: async (parent, { characterId, itemName}) => {
            return Character.findOneAndUpdate(
                {_id: characterId},
                {$pull: {item: {name: itemName}}},
                {new: true}
            )
        },
        updateAbility: async (parent, { characterId, abilityName}) => {
            return Character.findOneAndUpdate(
                {_id: characterId },
                {$pull: {ability: {name: abilityName}}},
                {new: true}
            )
        }
    }
}

module.exports = resolvers