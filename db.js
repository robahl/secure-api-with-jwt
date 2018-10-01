const mongoose = require('mongoose');

const user = process.env.DBUSER;
const pass = process.env.DBPASS;

const mongoUri = `mongodb+srv://${user}:${pass}@haven-qjdfk.mongodb.net/test?retryWrites=true`;


module.exports = {
  connect: () => {
    mongoose.connect(mongoUri, {useNewUrlParser: true});
    console.log("Connected to MongoDB");
  }
};
