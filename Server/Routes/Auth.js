const express = require("express");
const router = express.Router();
const db = require("../config/mysql");
const bcrypt = require("bcrypt");

//  SIGNUP ROUTE
router.post("/SignUp", (req, res) => {
  const { username, email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], async (error, results) => {
    if (error) {
      console.error("Error executing MySQL query:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    if (results.length > 0) {
      res.status(409).json({ error: "User already exists" });
      return;
    }
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const insertQuery =
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      db.query(
        insertQuery,
        [username, email, hashedPassword],
        (error, results) => {
          if (error) {
            console.error("Error executing MySQL query:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
          }
          res.status(201).json({ message: "Account created successfully!" });
        }
      );
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
});

// LOGIN ROUTE
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], async (error, results) => {
    if (error) {
      console.error("Error executing MySQL query:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    const user = results[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(400).json({ error: "Wrong password" });
      return;
    }
    res
      .status(200)
      .json({ message: `Welcome ${user.username}! You are now logged in` });
  });
});

// ADMIN ROUTE
router.post("/admin", (req, res) => {
  const { adminEmail, adminPassword } = req.body;
  const query = "SELECT * FROM admins WHERE adminEmail = ?";
  db.query(query, [adminEmail], async (error, results) => {
    if (error) {
      console.error("Error executing MySQL query:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: "Admin not found" });
      return;
    }
    const admin = results[0];
    const validPassword = await bcrypt.compare(
      adminPassword,
      admin.adminPassword
    );
    if (!validPassword) {
      res.status(400).json({ error: "Wrong password" });
      return;
    }
    res.status(200).json({
      message: "Login successfully",
      data: { admin: admin.adminName },
    });
  });
});

module.exports = router;
