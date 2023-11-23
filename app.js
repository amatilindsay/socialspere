const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.static ("public"))

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/profile", (req, res) => {
  res.render("profile");
});
app.use((req, res) => {
  res.status(404).render("error", {
    errorMessage: "404 error:page requested was not found",
  });
});
app.listen(3000);
