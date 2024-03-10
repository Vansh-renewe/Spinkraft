const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const users = [];
const generateID = () => Math.random().toString(36).substring(2, 10);
app.get("/api", (req, res) => {
  res.json({ message: "Hello world" });
});
app.post("/api/SignUp", (req, res) => {
  const { email, password, username } = req.body;

  let result = users.filter((user) => user.email === email);

  if (result.length === 0) {
    const newUser = { id: generateID(), email, password, username };
    // Adds the user to the array of users
    console.log(newUser);
    users.push(newUser);
    return res.json({
      message: "Account created successfully!",
    });
  }

  res.json({
    error_message: "User already exists",
  });
});
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  let result = users.filter(
    (user) => user.email === email && user.password === password
  );

  if (result.length !== 1) {
    return res.json({
      error_message: "Incorrect credentials",
    });
  }

  res.json({
    message: "Login successfully",
    data: {
      username: result[0].username,
    },
  });
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
