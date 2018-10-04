const mongoose = require('mongoose');

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const dbName = 'adminfer';

const mongoUri = `mongodb+srv://${user}:${pass}@haven-qjdfk.mongodb.net/${dbName}?retryWrites=true`;


module.exports = {
  connect: () => {
    mongoose.connect(mongoUri, {useNewUrlParser: true});
    console.log("Connected to MongoDB");
  }
};
