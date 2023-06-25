const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', routes);



db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}! Bang!!!!`);
    });
  });
