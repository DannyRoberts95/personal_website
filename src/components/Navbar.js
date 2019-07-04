import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav
      className="uk-navbar-container uk-margin uk-margin-large-bottom uk-background-default uk-navbar-transparent"
      uk-navbar="mode: click"
    >
      <div className="uk-navbar-left ">
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/">
              <p className="uk-button uk-button-text">Home</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="uk-navbar-right ">
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/gallery">
              <p className="uk-button uk-button-text">Portfolio Gallery</p>
            </Link>
          </li>

          <li>
            <Link to="/info">
              <p className="uk-button uk-button-text">Information</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
