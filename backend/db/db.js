const mongoose = require('mongoose');
const mongoURL = `mongodb://kengtania:kengtania@ac-fhsnu55-shard-00-00.ebgbywk.mongodb.net:27017,ac-fhsnu55-shard-00-01.ebgbywk.mongodb.net:27017,ac-fhsnu55-shard-00-02.ebgbywk.mongodb.net:27017/?ssl=true&replicaSet=atlas-v5si54-shard-0&authSource=admin&retryWrites=true&w=majority`;

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(mongoURL);
        // await mongoose.connect(process.env.MONGO_URL);
        console.log('DB Connection Sucessful');
    } catch (error) {
        console.log(error);
        console.log('DB Connection Error');
    }
}

module.exports = {db}
