//create a new route
const express = require("express");

const router = express.Router();

//get all recipes

router.get("/", (req, res) => {
  res.send({ hi: "here" });
});

module.exports = router;
