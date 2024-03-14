const mongoose = require("mongoose");

// Define user schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
});

// Define admin schema
const adminSchema = new mongoose.Schema({
  adminEmail: { type: String, required: true, unique: true },
  adminPassword: { type: String, required: true },
  adminName: { type: String, required: true },
});

// Create User and Admin models based on the schemas
const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);

module.exports = { User, Admin };
