const express = require("express");
const mongoose = require("mongoose");
const { User } = require("../schema/user");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const { u: user, r: redirect } = req.query;
  console.log(user, redirect);
  // res.send("Hello World!");

  const url = "https://andreazago.it/";
  res.redirect(url);
});

mongoose
  .connect(
    "mongodb+srv://admin:bhCfkWLtVC5nC8BK@cluster0.bfr1oob.mongodb.net/tracker-url?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to the DB");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
      const newUser = new User({ name: "Andrea Zago" });
      newUser.save();
    });
  })
  .catch((error) => console.log("Error: ", error));
