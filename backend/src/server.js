const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes');

const app = express();

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0-lfmbb.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});