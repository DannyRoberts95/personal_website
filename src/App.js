import React from "react";
import p5 from "p5";
import p5Dom from "p5/lib/addons/p5.dom.js";
import { HashRouter, Route } from "react-router-dom";

import "../node_modules/uikit/dist/css/uikit.css";
import "../node_modules/uikit/dist/js/uikit.js";
import "uikit/dist/js/uikit-icons.min.js";

import "./css/style.css";

import LandingPage from "./LandingPage.js";
import GalleryPage from "./GalleryPage.js";
import InfoPage from "./Info.js";
import ProjectPage from "./components/ProjectPage.js";

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

class App extends React.Component {
  render() {
    return (
      <div className="uk-container uk-container-medium uk-container-center uk-margin-large-bottom">
        <HashRouter>
          <div>
            <Navbar />
            <div>
              <Route exact path="/" component={LandingPage} />
              <Route path="/info" component={InfoPage} />
              <Route path="/gallery" component={GalleryPage} />

              <Route path="/project_page/:id" component={ProjectPage} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
} //END OF CLASS

export default App;
