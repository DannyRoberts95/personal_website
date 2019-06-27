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
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   axios
  //     .get(
  //       "https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/288284785/projects?api_key=EnQn6zgYBKyZh2keUdkI1FdONQn7rava"
  //     )
  //     .then(response => {
  //       //Limit the number loaded initally to 10 and add a LOAD MORE button to get the rest
  //       this.setState({
  //         projects: response.data.projects
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <div className="uk-container uk-container-medium uk-container-center uk-margin-top uk-margin-large-bottom">
        <HashRouter>
          <div>
            <Navbar />
            <div>
              <Route exact path="/" component={LandingPage} />
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
