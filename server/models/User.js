const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { defineArguments } = require('graphql/type/definition');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    winCount: {
        type: Number,
        default: 0
    }
});


userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);
module.exports = User;