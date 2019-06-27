import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav
      className="uk-navbar-container uk-margin uk-navbar-transparent uk-margin-large-bottom"
      uk-navbar="mode: click"
    >
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/landing_page">
              <p className="uk-button uk-button-text">Home</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/gallery">
              <p className="uk-button uk-button-text">Portfolio Gallery</p>
            </Link>
          </li>

          <li>
            <Link to="/contact">
              <p className="uk-button uk-button-text">Contact</p>
            </Link>
          </li>

          <li>
            <Link to="/about">
              <p className="uk-button uk-button-text">About</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
