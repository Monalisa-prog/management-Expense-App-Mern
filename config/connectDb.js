const mongoose = require("mongoose");
const colors = require("colors");

const username = 'bindhanimonalisa15';
const password = 'Adya@1998';
const hostname = 'cluster0.89rqvit.mongodb.net';
const database = 'expenseApp';

const uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${hostname}/${database}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
//rest object
