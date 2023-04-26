const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());

server.listen(4000, () => {
  console.log("Servidor iniciado em http://localhost:4000");
});

server.get("/films", (req, res) => {
  res.send(films);
});

const films = [
  {
    id: 1,
    title: "E.T.: O Extraterrestre",
    poster:
      "https://www.themoviedb.org/t/p/w1280/8j5igb0iuV9TYudw9SuMV5GT9K9.jpg",
    releaseYear: 1982,
    rentalPrice: 9.9,
  },
  {
    id: 2,
    title: "Titanic",
    poster:
      "https://www.themoviedb.org/t/p/w1280/3yPHYx67pQpvJa6jk9gqgVDvdbE.jpg",
    releaseYear: 1997,
    rentalPrice: 9.9,
  },
  {
    id: 3,
    title: "O Mágico de Oz",
    poster:
      "https://www.themoviedb.org/t/p/w1280/7sYIjWRzqClPK6hiqpOJOnaGUcO.jpg",
    releaseYear: 1939,
    rentalPrice: 9.9,
  },
  {
    id: 4,
    title: "Alien: O Oitavo Passageiro",
    poster:
      "https://www.themoviedb.org/t/p/w1280/t0VpOjqwobTpQK2SEZpXlqt5cqY.jpg",
    releaseYear: 1979,
    rentalPrice: 9.9,
  },
];
