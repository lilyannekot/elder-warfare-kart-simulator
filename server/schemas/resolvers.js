const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (parent) => {
      return User.find({});
    }
  },
  Mutation: {
    addUser: async (parent, { email, password }) => {
      return await User.create({ email, password });
    },
    deleteUser: async (parent, { userId }) => {
      return await User.findOneAndDelete({ _id: userId });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

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
