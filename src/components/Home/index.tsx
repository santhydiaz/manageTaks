import * as React from "react";
import "./index.scss";
export const Home = () => {
  return (
    <div className="contenedor">
      <h1>Welcome to Mr Note</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p className="btnTask">
      Entra ya a crear tus notas
        <a href="#"> click here</a>
      </p>
    </div>
  );
};
