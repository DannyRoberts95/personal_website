import React from "react";
import { HashRouter, Route } from "react-router-dom";

import "../node_modules/uikit/dist/css/uikit.css";
import "../node_modules/uikit/dist/js/uikit.js";

import "./css/style.css";

import LandingPage from "./LandingPage.js";
import GalleryPage from "./GalleryPage.js";
import AboutPage from "./About.js";
import ContactPage from "./Contact.js";
import ProjectPage from "./components/ProjectPage.js";

import Navbar from "./components/Navbar.js";

class App extends React.Component {
  render() {
    return (
      <div className="uk-container uk-container-medium uk-container-center uk-margin-top uk-margin-large-bottom">
        <HashRouter>
          <div>
            <Navbar />
            <div>
              <Route exact path="/home" component={LandingPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/gallery" component={GalleryPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/project_page/:id" component={ProjectPage} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
} //END OF CLASS

export default App;
