const db = require('../config/connection');
const { Character, User, Item, Ability } = require('../models');

const characterData = require('./characterData.json');
const itemData = require('./itemData.json');
const userData = require('./userData.json');
const abilityData = require('./abilityData.json');

db.once('open', async () => {
    try {
        await Character.deleteMany({});
        await Item.deleteMany({});
        await User.deleteMany({});
        await Ability.deleteMany({});

        await Character.create(characterData);
        await Item.create(itemData);
        await User.create(userData);
        await Ability.create(abilityData);
    }
    catch (err) {
        console.error(err);
    }
    
    console.log('Database seeded successfully')
});