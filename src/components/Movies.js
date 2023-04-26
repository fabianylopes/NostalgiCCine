import { useState, useEffect } from "react";
import axios from "axios";

export default function Movies() {
  const [rented, setRented] = useState(false);

  function rent() {
    setRented(true);
  }

  const [movies, setMovies] = useState(null);

  useEffect(() => getFilms(), []); // eslint-disable-line react-hooks/exhaustive-deps

  function getFilms() {
    const promise = axios.get("http://localhost:4000/films/");
    promise.then((res) => setMovies(res.data));
    promise.catch((err) => console.log(err));
  }

  console.log(movies);

  return (
    <>
      <div className="title-box">
        <h3>Escolha o filme que deseja alugar</h3>
      </div>
      {movies &&
        movies.map((f) => (
          <>
            <div className="container">
              <img key={f.id} src={f.poster} alt="" />
            </div>
            <div>
              <p>{f.title}</p>
              <p>{f.releaseYear}</p>
              <p>R$ {f.rentalPrice.toFixed(2)}</p>
              {rented ? (
                <h3>Alugado com Sucesso</h3>
              ) : (
                <button onClick={rent}>Alugar</button>
              )}
            </div>
          </>
        ))}
    </>
  );
}
