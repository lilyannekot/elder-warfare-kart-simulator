const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

// function isCorrectPassword() {
//   return true
// }

const resolvers = {
  Query: {
    users: async (parent) => {
      return User.find({});
    },
    
  },
  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password })
      const token = signToken(user)
      return {
        token, 
        user
      }
    },

    deleteUser: async (parent, { userId }) => {
      return await User.findOneAndDelete({ _id: userId });
    },
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError(
          "No user could be found with that username!"
        );
      }

      // const passwordCheck = await user.isCorrectPassword(password);

      // if (!passwordCheck) {
      //   throw new AuthenticationError("Incorrect password!");
      // }

      const token = signToken(user);

      return { token, user };
    } catch (e) {
      console.log(e)
    }    
  },
  },
};

module.exports = resolvers;
