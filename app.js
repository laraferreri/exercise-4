const express = require("express");

const app = express();

const port = process.env.POST || 4000;

app.listen(port, () =>
console.log(`Exercise Four is running at localhost: ${port}`)
);