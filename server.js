const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

// create route
app.get("/", (req, res) => {
  res.render("index");
});

//create the port
app.listen(5000);
