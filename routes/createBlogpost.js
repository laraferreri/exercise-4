const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Create a Blog Post"));

module.exports = router;
