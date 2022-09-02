const db = require('../config/connection');
const { Character, StoreFront, User } = require('../models');

const characterData = require('./characterData.json');
const storeData = require('./storeData.json');
const userData = require('./userData.json');

db.once('open', async () => {
    try {
        // clean db
        await Character.deleteMany({});
        await StoreFront.deleteMany({});
        await User.deleteMany({});

        // bulk create each model
        const characters = await Character.insertMany(characterData);
        const stores = await StoreFront.insertMany(storeData);
        const users = await User.insertMany(userData);

        // need to set up associations
        // 
    }
    catch (err) {
        console.error(err);
    }
    
    console.log('Database seeded successfully')
});