const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const app = express();
//connect to the database
mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.use(express.urlencoded({ extended: false }));

// create route
app.get("/", (req, res) => {
  const articles = [
    {
      title: "test article",
      createdAt: new Date(),
      description: "test description",
    },
    {
      title: "test article2",
      createdAt: new Date(),
      description: "test description2",
    },
  ];

  res.render("articles/index", { articles: articles });
});

//create the port
app.listen(5000);
