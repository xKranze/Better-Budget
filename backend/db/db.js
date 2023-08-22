const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Successfully connected to DB')
    } catch (error) {
        console.log('Error connecting to DB');
    }
}

module.exports = {db}