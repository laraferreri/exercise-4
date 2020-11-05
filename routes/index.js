const express = require("express");

const router = express.Router();

router.get("/", (req,res) => res.send("Exercise 4"));

module.exports = router; 