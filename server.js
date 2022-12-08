const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const dbConnection = require('./db')
require('dotenv').config()
const session = require('express-session');
const MongoStore = require('connect-mongo');

//******** express server start ***********/
const app = express();
app.listen('8000', () => {
  console.log('[server] Server is running on port: 8000');
});

//******** DB connection ***********/

dbConnection()

//******** middleware ***********/
app.use(cors()); //TODO cors safety after deploy
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ 
  secret: 'asd789', 
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create(mongoose.connection),
}));
app.use(express.static(path.join(__dirname, '/client/build')));

//******** routes ***********/
app.use('/api', require('./routes/ads.routes'));
app.use('/api', require('./routes/users.routes'));
app.use('/auth', require('./routes/auth.routes'));
app.use('/auth/user', require('./routes/auth.routes'));

//******** serve React on other links ***********/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});


app.use((req, res) => {
  res.status(404).send('404 not found...');
})