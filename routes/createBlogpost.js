const express = require("express");
const router = express.Router();

const form = `<form>
<input type= "text" name="title" placeholder="Title of Post" />
<input type= "text" name="title" placeholder="Text of Post" />
<input type= "text" name="title" placeholder="Author" />
<button type= "submit"> Submit Post</button>

</form>
`;

router.get("/", (req, res) => res.send(form));

module.exports = router;
