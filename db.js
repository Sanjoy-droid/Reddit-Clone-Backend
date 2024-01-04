require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to mongoDB successfully");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectToMongo;
