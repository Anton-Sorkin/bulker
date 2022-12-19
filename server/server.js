// cteate boilder template for server

const express = require("express");

const app = express();

//express.json is a middleware that allows us to use the req.body object
app.use(
  cors({
    origin: ["*"],
    methods: ["*"],
  })
);

//get route from startRoute.js
app.use("/", require("./routes/startRoute"));

const PORT = process.env.PORT || 5000;

//local server
app.listen(PORT, () => {
  console.log("online at http://localhost:5000");
});
