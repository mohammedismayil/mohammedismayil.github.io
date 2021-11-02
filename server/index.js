const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/hello", (req, res) => {
  res.send("Hello hello route !");
  console.log("i am from express server");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
