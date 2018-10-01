const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db');

const port = 3300;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ok: true});
});



app.listen(port);
console.log(`Listening on ${port}`);
