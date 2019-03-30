const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/migration-tool', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected');
});

const basket1Schema = new mongoose.Schema({
    id: String,
    name: String,
    type: Number,
    banana: String
  });

const Basket = mongoose.model('Basket', basket1Schema);

const basket1 = new Basket({ name: 'basket1' });

basket1.save(function (err, basket1) {
    if (err) return console.error(err);
  });
