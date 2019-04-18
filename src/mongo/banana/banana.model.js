const mongoose = require('mongoose');

export const banana1Schema = new mongoose.Schema({
    id: String,
    name: String,
    type: Number
  });

export const Banana = mongoose.model('Banana', banana1Schema);

export const ctor = banana => new Banana({name: banana.Name});