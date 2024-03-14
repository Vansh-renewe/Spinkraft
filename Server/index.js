const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./Routes/Auth");
const productRoute = require("./Routes/Products");
const router = express.Router();
const db = require("./config/mysql");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello world" });
});

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
