const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const { request } = require( 'express' );

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
  
  try {
    const { login, password } = req.body;

    if (login && typeof login ==='string' && password && typeof password ==='string') {

      const user = await User.findOne({ login });
      if (!user) {
        return res.status(400).send({ message: 'User or password incorrect' });
      } else {
        console.log(user.login);
        if (bcrypt.compareSync(password, user.password)) {
          req.session.login = user.login;
          res.status(200).send({ message: 'Login successful'})
        } else {
          return res.status(400).send({ message: 'User or password incorrect' });
        }
      }
    } else {
      res.status(400).send({ message: 'Bad request' });
    } 
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

exports.getUser = async (req, res) => {
  if (req.session.login) {
    res.send({ login: req.session.login})
  } else {
    res.status(401).send({ message: 'Unauthorized entry' });
  }
  }