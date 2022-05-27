const express = require("express");
const router = express.Router();
const { books } = require("../../data.js");
let id = books.length;

router.get("/", (req, res) => {
  res.json({ books });
});

router.get("/:id", (req, res) => {
  const book = books.find((item) => item.id === Number(req.params.id));
  res.json({ book });
});

router.post("/", (req, res) => {
  id++;
  const book = { ...req.body, id: id };
  books.push(book);
  res.json({ book });
});

router.delete("/:id", (req, res) => {
  const book = books.find((item) => item.id === Number(req.params.id));
  books.splice(books.indexOf(book), 1);
  res.json({ book });
});

router.put("/:id", (req, res) => {
  const book = books.find((item) => item.id === Number(req.params.id));
  book.title = req.body.title;
  book.type = req.body.type;
  book.author = req.body.author;
  res.json({ book });
});

module.exports = router;
