const mongoose = require('mongoose');

const host = process.env.DB_HOST;
const name = process.env.DB_NAME;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

const mongoUri = `mongodb+srv://${user}:${pass}@${host}/${name}?retryWrites=true`;


module.exports = {
  connect: () => {
    mongoose.connect(mongoUri, {useNewUrlParser: true});
    console.log("Connected to MongoDB");
  }
};
