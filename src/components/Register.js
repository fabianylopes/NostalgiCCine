import { useState } from "react";

export default function Register({ registered, setRegistered }) {
  const [userInfo, setUserInfo] = useState({});

  function handleRegister(e) {
    e.preventDefault();
    setRegistered(true);
  }

  if (registered) {
    return (
      <>
        <h3>Olá, {userInfo.name}!</h3>
        <div className="title-box">
          <h3>Escolha o filme que deseja alugar</h3>
        </div>
      </>
    );
  } else {
    return (
      <div className="register-box">
        <h3>Faça seu Cadastro</h3>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            required
          ></input>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            required
          ></input>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}
