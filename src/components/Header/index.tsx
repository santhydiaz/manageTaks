import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import "./index.scss";

export const Header = () => {
  return (
    <>
      <header>
        <input type="checkbox" name="" id="boton-menu" />
        <label htmlFor="boton-menu">
          <i className="fas fa-bars"></i>
        </label>
        <nav className="menu">
          <ul className="nav-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/task" activeClassName="active">
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName="active">
                <i className="fas fa-sign-in-alt"></i> Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
