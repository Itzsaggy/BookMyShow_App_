// const mongoose = require('mongoose');

// const connectDB = async() => {
//   try{
//     await mongoose.connect('mongodb://127.0.0.1:27017/bookMyShow');
//     console.log('Connected to Database')}
//   catch(error){
//     console.log(error)}
// }
// module.exports = connectDB;

// dbConnection.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to Database');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
