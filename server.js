const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const adsRoutes = require('./routes/ads.routes');

app.use(cors()); //TODO cors safety after deploy
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', adsRoutes);

app.use((req, res) => {
  res.status(404).send('404 not found...');
})

//******** DB connection ***********/
//const NODE_ENV = process.env.NODE_ENV; TODO change this for deploy
let dbUri = '';

// if(NODE_ENV === 'production') dbUri = 'mongodb+srv://krzemirdev:yxg*dfe!bdv9ETP!xjg@clustermainfree.52beawg.mongodb.net/noticeBoardDB?retryWrites=true&w=majority';
// else if(NODE_ENV === 'test') dbUri = 'mongodb://localhost:27017/noticeBoardDBtest';
// else dbUri = 'mongodb://localhost:27017/noticeBoardDB';

dbUri = 'mongodb+srv://krzemirdev:ir2rTrlF43UWeimi@clustermainfree.52beawg.mongodb.net/noticeBoardDB?retryWrites=true&w=majority';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('[server] Connected to the database');
});
db.on('error', err => console.log('Error ' + err));


app.listen('8000', () => {
  console.log('[server] Server is running on port: 8000');
});
