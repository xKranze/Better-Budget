const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/programming-workouts');
        console.log('Successfully connected to DB');
    } catch (error) {
        console.log('Error connecting to DB');
    }
}

module.exports = {db}