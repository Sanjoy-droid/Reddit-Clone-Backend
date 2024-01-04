// require("dotenv").config();
// const mongoose = require("mongoose");
// const mongoURI = process.env.MONGOURI;

// const connectToMongo = async () => {
//   try {
//     mongoose.set("strictQuery", false);
//     mongoose.connect(mongoURI);
//     console.log("Connected to mongoDB successfully");
//   } catch (error) {
//     console.log(error);
//     process.exit();
//   }
// };

// module.exports = connectToMongo;

require("dotenv").config();

db.js;
const mongoose = require("mongoose");
const mongoURI = process.env.MONGOURI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectToMongo;
