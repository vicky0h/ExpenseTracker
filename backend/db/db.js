const mongoose = require('mongoose');


const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB Connection Sucessful');
    } catch (error) {
        console.log(error);
        console.log('DB Connection Error');
    }
}

module.exports = {db}
