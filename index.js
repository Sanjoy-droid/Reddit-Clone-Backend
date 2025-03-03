// index.js
require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

connectToMongo();

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/post", require("./routes/post"));
app.get("/api/hello", (req, res) => {
  res.json("hi");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
