// routes/index.js

const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "public" });
});

router.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

module.exports = router;
