const mongoose = require('mongoose');

export const basket1Schema = new mongoose.Schema({
    id: String,
    name: String,
    type: Number,
    banana: String
  });

export const Basket = mongoose.model('Basket', basket1Schema);