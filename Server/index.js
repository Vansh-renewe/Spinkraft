const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./Routes/Auth");
const productRoute = require("./Routes/Products");
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

dotenv.config();

const connectionString = process.env.MONGODB_URI;

const options = {
  useUnifiedTopology: true,
  dbName: "SpinKraft",
};

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(connectionString, options);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connectToMongoDB();

app.get("/api", (req, res) => {
  res.json({ message: "Hello world" });
});

//auth routes
app.use("/api/auth", authRoute);
app.use("/api/Products", productRoute);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
