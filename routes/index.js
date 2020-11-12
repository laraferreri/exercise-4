const express = require("express");
const router = express.Router();

const firebase = require("firebase");
const { query } = require("express");
const db = firebase.firestore();
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => {
  const blogpostsArray = [];

  blogposts
    .get()
    .then((querySnapshot) => {
      console.log("querySnapshot", querySnapshot);
      querySnapshot.forEach((doc) => {
        blogpostsArray.push(doc.data());
      });
      return res.send(blogpostsArray);
    })
    .catch(function (e) {
      console.log("error", e);
      return res.send(error);
    });
});

// res.send("Show all Blog Posts"));

module.exports = router;
