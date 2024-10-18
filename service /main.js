const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const categories = [
  {
    name: "shopping",
    age: 10,
  },
  {
    name: "drink",
    age: 12,
  },
];

app.get("/categories/list", (req, res) => {
  res.json(categories);
});

app.get("/categories/create", (req, res) => {
  const { name } = req.query;
  categories.push({ name: name });
  res.send("success!");
});


app.get("/categories/update", (req, res) => {

  res.send("success!");
});

app.get("/categories/delete", (req, res) => {

  res.send("success!");
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
