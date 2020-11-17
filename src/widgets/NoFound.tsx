import * as React from "react";
import { Link } from "react-router-dom";
import "./NoFound.scss";

export const NoFound = () => {
  return (
    <>
      <div className="container-404">
        <img src="assets/img/sad.gif" className="img-no-found" />
        <h2>Page not found</h2>
        <h1>404</h1>
        <p>We can't find the page you're looking for...</p>
        <Link to="/"> Go back home</Link>
      </div>
    </>
  );
};
