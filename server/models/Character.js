const { Schema, model } = require('mongoose')

const characterSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    hp: {
        type: Number,
        required: true
    },
    damage: {
        type: Number,
        required: true
    },
    hitChance: {
        type: Number,
        required: true
    },
    dodge: {
        type: Number,
        required: true
    }
    credits: {
        type: Number,
        required: true
    },
    items: [
        {
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item'
            }
        }
    ],
    abilities: [
        {
            abilityId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Ability'
            }
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

const Character = model('Character', characterSchema);

module.exports = Character;