import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="/" target="_blank">
          <img
            src={"public/img/logo-cardioxplore3d.jpg"}
            className="logo"
            alt="CardioXploreLogo"
          />
        </a>
      </div>
      <h1>CardioXplore3D</h1>
      <div className="card"></div>
      <p className="read-the-docs">
        Aqui proximamente tendremos contenido informativo e interactivo sobre el
        corazón :)
      </p>
    </>
  );
}

export default App;
