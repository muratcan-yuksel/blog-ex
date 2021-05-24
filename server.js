const express = require("express");
const app = express();

app.set("view engine", "ejs");

// create route
app.get("/", (req, res) => {
  res.render("index");
});

//create the port
app.listen(5000);
