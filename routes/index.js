const express = require("express");
const router = express.Router();

const firebase = require ("firebase");
const db = firebase.firestore();
const blogposts = db.collection("blogposts");

router.get("/", (req,res) => {
   blogposts.get().then((querySnapshot) => {
       console.log("querySnapshot", querySnapshot)
       return res.send(querySnapshot)
        })
        .catch(function(e){
            console.log("error", e);
            return res.send(error);
    });
});
    
// res.send("Show all Blog Posts"));

module.exports = router; 