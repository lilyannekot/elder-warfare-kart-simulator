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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StoreFront'
    }
});

const Character = model('Character', characterSchema);

module.exports = Character;