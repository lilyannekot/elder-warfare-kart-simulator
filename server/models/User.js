const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
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

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const salt = 10;
        this.password = await bcrypt.hash(this.password, salt);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);
module.exports = User;