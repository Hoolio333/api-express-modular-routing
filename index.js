const express = require("express");
const app = express();
const port = 3030;

const cors = require("cors");
const morgan = require("morgan");

// SETUP MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// REQUIRE ROUTERS
const usersRouterUser = require("./src/routers/users");
const usersRouterFilms = require("./src/routers/films");
const usersRouterBooks = require("./src/routers/books");

// ADD ROUTERS TO APP
app.use("/users", usersRouterUser);
app.use("/films", usersRouterFilms);
app.use("/books", usersRouterBooks);

/* START SERVER */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
