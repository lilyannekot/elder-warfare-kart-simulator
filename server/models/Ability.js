const { Schema, model } = require('mongoose');

const abilitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Ability = model('Ability', abilitySchema);

module.exports = Ability;