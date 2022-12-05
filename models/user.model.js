const mongoose = require('mongoose');

const userSchema = new Schema({
  login: {type: 'string', required: true},
  password: {type:'string', required: true},
  avatar: {type:'string', required: true},
  phone: {type:'string', required: true}
});

const User = mongoose.model('User', userSchema);
