require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db');
const userRoute = require('./controllers/user');
const loginHandler = require('./controllers/login');

const port = 3300;

db.connect();

app.use(bodyParser.json());

app.use('/users', userRoute);
app.use(loginHandler);

app.get('/', (req, res) => {
  res.json({awake: true});
});



app.listen(port);
console.log(`Listening on ${port}`);
