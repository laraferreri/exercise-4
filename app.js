const express = require("express");

const app = express();

const port = process.env.PORT|| 4000;

var firebaseConfig = {
    apiKey: "AIzaSyBztW-ITDjc9nb2DuPh1E8n-apLJz3YAvM",
    authDomain: "exercise-four-8dae2.firebaseapp.com",
    databaseURL: "https://exercise-four-8dae2.firebaseio.com",
    projectId: "exercise-four-8dae2",
    storageBucket: "exercise-four-8dae2.appspot.com",
    messagingSenderId: "793231468965",
    appId: "1:793231468965:web:9f8f8ce6b05d8f1a28e04c"
  };

  const firebase = require("firebase");
  firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js")
const postRoute = require("./routes/post.js")
const createRoute = require("./routes/createBlogpost.js")

app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

app.listen(port, () =>
console.log(`Exercise Four is running at localhost:${port}`)
);