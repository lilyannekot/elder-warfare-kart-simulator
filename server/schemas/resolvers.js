const { Character, StoreFront, User } = require("./models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getCharacter: async (parent, args) => {
      return await Character.findById(args._id);
    },
    getCredits: async (parent, args) => {
      return await Character.findById(args._id);
    },
  },
  Mutation: {
    addUser: async (parent, { username, password }) => {
      return await User.create({ username, password });
    },
    deleteUser: async (parent, { userId }) => {
      return await User.findOneAndDelete({ _id: userId });
    },
    addCharacter: async (parent, { name }) => {
      return await Character.create({ name });
    },
    updateCharacter: async (parent, { characterId }) => {
      return await Character.findOneAndUpdate({ _id: characterId });
    },
    updateCharacterItem: async (parent, { characterId, itemName }) => {
      return Character.findOneAndUpdate(
        { _id: characterId },
        { $pull: { item: { name: itemName } } },
        { new: true }
      );
    },
    updateCharacterAbility: async (parent, { characterId, abilityName }) => {
      return Character.findOneAndUpdate(
        { _id: characterId },
        { $pull: { ability: { name: abilityName } } },
        { new: true }
      );
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError(
          "No user could be found with that username!"
        );
      }

      const passwordCheck = await user.isCorrectPassword(password);

      if (!passwordCheck) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
