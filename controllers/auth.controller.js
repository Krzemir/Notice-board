const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {

    const { login, password } = req.body;

    if (login && typeof login === 'string' && password && typeof password === 'string') {
      const userWithLogin = await User.findOne({ login });

      if (userWithLogin) {
        return res.status(409).send({ message: 'User exists already' });
      }

      const user = await User.create({ login, password: await bcrypt.hash(password, 10) 
        /* avatar: req.file.filename */ });
      
      res.status(201).send({ message: 'User created successfully' + user.login });
  } else {
    res.status(400).send({ message: 'Invalid request' });
  }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

exports.login = async (req, res) => {
  
}