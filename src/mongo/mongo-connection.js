const mongoose = require('mongoose');

export const connectMongoDb = () => mongoose.connect('mongodb://localhost/migration-tool',
 {useNewUrlParser: true});

export const disconnectMongoDb = async () => await mongoose.connection.close();