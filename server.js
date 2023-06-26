const express = require('express');
//const mongoose = require('mongoose');
const db = require('./config/connection');
const routes = require('./routes');
//const moment = require('moment');

const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routes);


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}! Bang!!!!`);
    });
  });
