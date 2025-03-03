const mongoose = require("mongoose")

const dbURI = 'mongodb://localhost:27017/mydatabase';

const connectDb = async () => {
    mongoose.set('debug', true);
    console.log("MongoDB URI:", process.env.CONNECTION_STRING);

    try {
        const connect = await mongoose.connect(dbURI);
        console.log("Connected to Database: ", connect.connection.host, connect.connection.name);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;