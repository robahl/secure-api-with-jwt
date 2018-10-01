let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let db = require('./db');

const port = 3300;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ok: true});
});



app.listen(port);
console.log(`Listening on ${port}`);
