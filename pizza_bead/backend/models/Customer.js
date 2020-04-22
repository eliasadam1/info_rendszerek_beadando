const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Customer = new Schema({
  name: {
    type: String
  },
  username: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: Number
  }
}, {
  collection: 'customers'
})

module.exports = mongoose.model('Customer', Customer)
