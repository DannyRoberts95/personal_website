import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Footer = props => {
  return (
    <nav
      className="uk-navbar-container uk-margin-medium-top uk-margin-large-top uk-background-default uk-navbar-transparent"
      uk-navbar="mode: click"
    >
      <div className="uk-navbar-left ">
        <ul className="uk-navbar-nav">
          <li>Developed from scratch by me.</li>
        </ul>
      </div>

      <div className="uk-navbar-center ">
        <ul className="uk-navbar-nav" />
      </div>

      <div className="uk-navbar-right ">
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/gallery">
              <p className="uk-button uk-button-text">Gallery</p>
            </Link>
          </li>
          <li>
            <Link to="/info">
              <p className="uk-button uk-button-text">Info</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
