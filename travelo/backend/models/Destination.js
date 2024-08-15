const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  image: String,
  title: String,
  subTitle: String,
  cost: String,
  duration: String,
});

// Here we specify the collection name as 'destinationsData'
module.exports = mongoose.model('Destination', destinationSchema, 'destinationsData');
