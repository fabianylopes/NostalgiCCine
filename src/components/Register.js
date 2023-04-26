export default function Register() {
  function handleSignUp() {}

  return (
    <>
      <form onSubmit={handleSignUp}>
        <p>Nome:</p>
        <input type="text" placeholder="Name" required></input>
        <p>Email</p>
        <input type="email" placeholder="E-mail" required></input>

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
