const express = require("express");
const router = express.Router();
const { films } = require("../../data.js");
let id = films.length;

router.get("/", (req, res) => {
  const director = req.query.director;
  if (director) {
    res.json(films.filter((film) => film.director === director));
  } else {
    res.json({ films });
  }
});

router.get("/:id", (req, res) => {
  const film = films.find((item) => item.id === Number(req.params.id));
  res.json({ film });
});

router.post("/", (req, res) => {
  id++;
  const film = { ...req.body, id: id };
  films.push(film);
  res.json({ film });
});

router.delete("/:id", (req, res) => {
  const film = films.find((item) => item.id === Number(req.params.id));
  films.splice(films.indexOf(film), 1);
  res.json({ film });
});

router.put("/:id", (req, res) => {
  const film = films.find((item) => item.id === Number(req.params.id));
  film.director = req.body.director;
  film.title = req.body.title;
  res.json({ film });
});

module.exports = router;
