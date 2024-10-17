const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/articles", (req, res) => {
  res.json([
    { id: 1, title: "green" },
    { id: 2, title: "juice" },
  ]);
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

const cart = [
  {
    name: "carl",
  },
];

app.get("/listening/list", (req, res) => {
  res.send(cart);
});

app.get("/listening/create", (req, res) => {
  const { name } = req.query;
  cart.push({ name: name });
  res.send("success");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
