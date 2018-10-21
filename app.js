require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');

const userRoute = require('./controllers/user');
const loginHandler = require('./controllers/login');

db.connect();

app.use(bodyParser.json());

app.use('/users', userRoute);
app.use(loginHandler);

app.get('/', (req, res) => {
  res.json({ awake: true });
});

// Export the app for Supertest
module.exports = app;
