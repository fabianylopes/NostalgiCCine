import { useState, useEffect } from "react";
import axios from "axios";

export default function Movies({ registered }) {
  const [rented, setRented] = useState(false);
  const [movies, setMovies] = useState(null);

  function rent() {
    if (!registered) {
      alert("Você precisa se cadastrar para alugar um filme!");
    } else {
      setRented(true);
    }
  }

  useEffect(() => getFilms(), []);

  function getFilms() {
    const promise = axios.get("http://localhost:4000/films/");
    promise.then((res) => setMovies(res.data));
    promise.catch((err) => console.log(err));
  }

  console.log(movies);

  return (
    <div className="movies-container">
      {movies &&
        movies.map((f) => (
          <div className="movie">
            <div className="container">
              <img key={f.id} src={f.poster} alt="" />
            </div>
            <div className="info-movies">
              <p>{f.title}</p>
              <p>Ano: {f.releaseYear}</p>
              <p>R$ {f.rentalPrice.toFixed(2)}</p>
              {rented ? (
                <h3>Alugado com Sucesso</h3>
              ) : (
                <button onClick={rent}>Alugar</button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
