const mongoose = require('mongoose');
const MONGO_URI = ("mongodb+srv://lucasalbuquerque2k:e39lYmMxEbwmr10y@primeiraapi.u7gbk.mongodb.net/?retryWrites=true&w=majority&appName=PrimeiraAPI ;")
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
