const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  title: { type: 'string', required: true, minlength: 10, maxlength: 50},
  content: { type: 'string', required: true, minlength: 20, maxlength: 1000},
  date: { type:'string', required: true},
  photo: { type: 'string', required: true},
  price: { type: 'string', required: true},
  localization: { type: 'string', required: true},
  user: { type: 'string', required: true, ref: 'User' }
});

module.exports = mongoose.model('Ad', adSchema);