import React from "react";
import "./css/style.css";

import axios from "axios";

import Filter from "./components/Filter.js";
import ProjectModule from "./components/ProjectModule.js";

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      projectsLoaded: false,
      fieldValues: [],
      fieldSortPreference: "All",
      yearValues: [],
      yearSortPreference: "All"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/288284785/projects?api_key=EnQn6zgYBKyZh2keUdkI1FdONQn7rava"
      )
      .then(response => {
        this.setState({
          projects: response.data.projects,
          projectsLoaded: true
        });

        //Extract fields of works from the project tags
        let fields = response.data.projects
          .map(item => {
            return item.fields;
          })
          .toString()
          .split(",");
        const dedupedFields = [...new Set(["All"].concat(fields))];

        this.setState({ fieldValues: dedupedFields });

        //Extract year of works' creation from the project tags
        let years = response.data.projects.map(item => {
          return new Date(item.created_on * 1000)
            .toLocaleString()
            .substring(6, 10);
        });
        const dedupedYears = [...new Set(["All"].concat(years))];

        this.setState({ yearValues: dedupedYears });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // console.log(target);
    // console.log(value);
    // console.log(name);
    this.setState({ [name]: value });
  }

  render() {
    let projectData = this.state.projects;

    //filter the projects by field
    projectData = projectData.filter(item => {
      return (
        item.fields.includes(this.state.fieldSortPreference) ||
        this.state.fieldSortPreference === "All"
      );
    });

    //filter the projects by field
    projectData = projectData.filter(item => {
      return (
        new Date(item.created_on * 1000).toLocaleString().substring(6, 10) ===
          this.state.yearSortPreference ||
        this.state.yearSortPreference === "All"
      );
    });

    const projectsToBeRendered = projectData;
    const renderList = projectsToBeRendered.map(item => {
      return <ProjectModule key={item.id} data={item} />;
    });

    return (
      <div>
        {this.state.projectsLoaded ? (
          <div
            className="uk-grid-small "
            uk-grid="true"
            uk-scrollspy="cls: uk-animation-fade; target: img; delay: 250; repeat: false"
          >
            <Filter
              handleChange={this.handleChange}
              fieldSortPreference={this.state.fieldSortPreference}
              fieldValues={this.state.fieldValues}
              yearSortPreference={this.state.yearSortPreference}
              yearValues={this.state.yearValues}
            />
            <div
              className="uk-width-3-4"
              uk-grid=" true"
              uk-scrollspy="cls: uk-animation-fade; target: img; delay: 250; repeat: false"
            >
              {renderList}
            </div>
          </div>
        ) : (
          <div className="uk-width-1-1 uk-position-center" uk-grid="true">
            <span className="uk-align-center" uk-spinner="ratio: 7.5" />
          </div>
        )}
      </div>
    );
  }
} //END OF CLASS

export default GalleryPage;
