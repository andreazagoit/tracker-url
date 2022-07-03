const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const { u: user, r: redirect } = req.query;
  console.log(user, redirect);
  res.send("Hello World!");
});

mongoose
  .connect(
    "mongodb+srv://admin:bhCfkWLtVC5nC8BK@cluster0.bfr1oob.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to the DB");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => console.log("Error: ", error));
