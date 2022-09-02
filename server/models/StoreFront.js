const { Schema, model } = require('mongoose');

const storeSchema = new Schema({
    items: [
        {
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item'
            },
            purchased: {
                type: Boolean,
                required: true
            }
        }
    ],
    abilities: [
        {
            abilityId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Ability'
            },
            purchased: {
                type: Boolean,
                required: true
            }
        }
    ],
    character: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    }
});

const StoreFront = model('StoreFront', storeSchema);

module.exports = StoreFront;