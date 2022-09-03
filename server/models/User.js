const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    character: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Character'
    }
});

const User = model('User', userSchema);
module.exports = User;