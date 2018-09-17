var express = require("express");
var router = express.Router();

/*  page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/*  URL */
router.get("/article-:numeroArticle(\\d+)", (req, res) => {
  console.log(req.params.numeroArticle); // return article number
  res.send("Coucou la famille");
});

/*  link */
router.get("/forms-:numeroForm(\\d+)", (req, res) => {
  console.log(req.params.numeroForm); // return 101
  console.log(req.query.level); // return "easy" 
  res.send(`Le paramètre est: ${req.params.numeroForm} c'est ${req.query.level}!`);
});

/*  name */
router.post("/forms-:numeroForm(\\d+)", (req, res) => {
  console.log(req.params.numeroForm); // return name en post
  console.log(req.body.name); // return name
});

module.exports = router;
