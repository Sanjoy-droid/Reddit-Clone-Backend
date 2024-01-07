// index.js
require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

connectToMongo();

const port = process.env.PORT || 5000;

app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/post", require("./routes/post"));
app.get("/hello", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
