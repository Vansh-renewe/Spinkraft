const router = require("express").Router();
const { User, Admin } = require("../models/AuthModel");
const bcrypt = require("bcrypt");
//=========================================================
// SIGNUP ROUTE
//=========================================================
router.post("/SignUp", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const result = await User.findOne({ email: email });

    if (!result) {
      //generate new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      //create new user
      const newUser = new User({
        username: username,
        email: email,
        password: hashedPassword,
      });
      const user = await newUser.save();

      return res.status(200).json({
        message: "Account created successfully!",
      });
    }
  } catch (err) {
    res.status(500).json({
      error_message: "User already exists",
    });
  }
});
//=========================================================
// LOGIN ROUTE
//=========================================================

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json("User not found");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json("Wrong password");
    }

    return res.status(200).json({
      message: `Welcome ${user.username}! You are now logged in`,
    });
  } catch (err) {
    res.status(500).json({
      message: "Invalid credentials",
      data: { err },
    });
  }
});

//=========================================================
//                   ADMIN ROUTES
//=========================================================
router.post("/admin", async (req, res) => {
  try {
    const { adminEmail, adminPassword } = req.body;
    const result = await Admin.findOne({ adminEmail: adminEmail });

    if (!result) {
      return res.status(404).json("Admin not found");
    }

    const validPassword = await bcrypt.compare(
      adminPassword,
      result.adminPassword
    );
    if (!validPassword) {
      return res.status(400).json("Wrong password");
    }

    res.status(200).json({
      message: "Login successfully",
      data: {
        admin: adminName,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Invalid credentials",
      data: { err },
    });
  }
});

// router.post("/adminsignup", async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const result = await Admin.findOne({ adminEmail: email });

//     if (!result) {
//       //generate new password
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);
//       //create new user
//       const newUser = new Admin({
//         adminName: username,
//         adminEmail: email,
//         adminPassword: hashedPassword,
//       });
//       const user = await newUser.save();

//       return res.status(200).json({
//         message: "Account created successfully!",
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       error_message: "User already exists",
//     });
//   }
// });
module.exports = router;
