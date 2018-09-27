var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const port = 3300;

app.get('/', (req, res) => {
  res.json({ok: true});
});

app.listen(port);
console.log(`Listening on ${port}`);
