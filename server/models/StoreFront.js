const { Schema, model } = require('mongoose');

const storeSchema = new Schema({
    items: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item'
            },
        }
    ],
    character: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    }
});

const StoreFront = model('StoreFront', storeSchema);

module.exports = StoreFront;