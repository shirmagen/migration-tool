const mongoose = require('mongoose');

export const connectMongoDb = async () => await mongoose.connect('mongodb://localhost/migration-tool',
 {useNewUrlParser: true});

export const disconnectMongoDb = async () => await mongoose.connection.close();