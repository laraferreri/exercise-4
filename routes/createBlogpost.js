const express = require("express");
const router = express.Router();

const form = `
<form action="/create/submit">
<input type= "text" name="title" placeholder="Title of Post" />
<input type= "text" name="title" placeholder="Text of Post" />
<input type= "text" name="title" placeholder="Author" />
<button type= "submit"> Submit Post</button>

</form>
`;

router.get("/", (req, res) => res.send(form));

router.get("/submit", (req, res) => {
  res.send("hi");
  const queryPArams = req.query;
  const idFromTitle = queryParams.title.replace(/\+/g, "-").toLowerCase();
  blogposts
    .doc(idFromTitle)
    .set(queryParams)
    .then(function (doc) {
      res.send("Successful Submission");
    })
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Submission");
    });
});
module.exports = router;
