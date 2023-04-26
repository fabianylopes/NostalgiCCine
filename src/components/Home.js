import { useState } from "react";
import Movies from "./Movies";
import Register from "./Register";

export default function Home() {
  const [registered, setRegistered] = useState(false);

  return (
    <>
      <Register registered={registered} setRegistered={setRegistered} />
      <Movies registered={registered} />
    </>
  );
}
