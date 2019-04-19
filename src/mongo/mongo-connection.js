const mongoose = require('mongoose');

export const connectMongoDb = async () => await mongoose.connect(process.env.MONGO_CONNECTION_STRING,
 {useNewUrlParser: true});

export const disconnectMongoDb = async () => await mongoose.connection.close();