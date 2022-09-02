const { Schema, model } = require('mongoose');

const storeSchema = new Schema({
    items: [
        {
            name: {
                type: String,
                required: true
            },
            purchased: {
                type: Boolean,
                required: true
            }
        }
    ],
    abilities: [
        {
            name: {
                type: String,
                required: true
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