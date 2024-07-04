const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection to sucessfull to DB");
  } catch (error) {
    console.error("database connection failed", error);
    process.exit(0);
  }
};

module.exports = connectDB;
