const { Schema, model } = require('mongoose')

const characterSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    stats: [
        {
            hp: {
                type: Number,
                required: true
            },
            damage: {
                type: Number,
                required: true
            }
        }
    ],
    credits: {
        type: Number,
        required: true
    },
    items: [
        {
            itemName: {
                type: String
            }
        }
    ],
    abilities: [
        {
            abilityName: {
                type: String
            }
        }
    ],
    store: {
        // not sure what goes here
    }
});

const Character = model('Character', characterSchema);

module.exports = Character;