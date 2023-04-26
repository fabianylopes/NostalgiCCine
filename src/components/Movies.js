import { useState, useEffect } from "react";
import axios from "axios";

export default function Movies({ registered }) {
  const [movies, setMovies] = useState(null);
  const [rented, setRented] = useState([]);

  function rent(id) {
    if (!registered) {
      alert("Você precisa se cadastrar para alugar um filme!");
    } else {
      if (rented.includes(id)) {
        setRented(rented.filter((f) => (f === id ? false : true)));
      } else {
        setRented([...rented, id]);
      }
    }
  }

  useEffect(() => getFilms(), []);

  function getFilms() {
    const promise = axios.get("http://localhost:4000/films/");
    promise.then((res) => setMovies(res.data));
    promise.catch((err) => console.log(err));
  }

  return (
    <div className="movies-container">
      {movies &&
        movies.map((m) => (
          <div key={m.id} className="movie">
            <div className="container">
              <img src={m.poster} alt="" />
            </div>
            <div className="info-movies">
              <p className="movie-title">{m.title}</p>
              <p>Ano: {m.releaseYear}</p>
              <p>R$ {m.rentalPrice.toFixed(2)}</p>
              {rented.includes(m.id) ? (
                <h4>Alugado com Sucesso</h4>
              ) : (
                <button onClick={() => rent(m.id)}>Alugar</button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
