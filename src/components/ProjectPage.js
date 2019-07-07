import React, { Component } from "react";
import axios from "axios";

import ImageModule from "./ImageModule.js";
import VideoModule from "./VideoModule.js";
import TextModule from "./TextModule.js";

import Heading from "./Heading.js";
import Subheading from "./Subheading.js";
import Subheading2 from "./Subheading2.js";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      projectLoaded: false
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/projects/${
          this.props.match.params.id
        }?api_key=EnQn6zgYBKyZh2keUdkI1FdONQn7rava`
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          project: response.data.project,
          projectLoaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    let ModulesToRender;
    if (this.state.projectLoaded) {
      ModulesToRender = this.state.project.modules.map((item, i) => {
        if (item.type === "image") {
          return <ImageModule key={i} module={item} />;
        } else if (item.type === "video") {
          return <VideoModule key={i} module={item} />;
        } else if (item.type === "text") {
          return <TextModule key={i} module={item} />;
        } else return null;
      });
    }
    return this.state.projectLoaded ? (
      <div className="uk-grid-large" uk-grid="true">
        <ProjectInfo project={this.state.project} />
        <div>{ModulesToRender}</div>
      </div>
    ) : (
      <div className="uk-grid-small " uk-grid="true">
        <span className="uk-align-center" uk-spinner="ratio: 7.5" />
      </div>
    );
  }
}

const ProjectInfo = props => {
  const created = new Date(props.project.created_on * 1000)
    .toLocaleString()
    .substring(0, 10);
  let fields = props.project.fields.join(` | `);
  let tags = props.project.tags.join(` | `);
  let tools = props.project.tools;
  for (let i = 0; i < tools.length; i++) {
    tools[i] = tools[i].title + ` (${tools[i].category_label})`;
  }
  tools = tools.join(` | `);
  return (
    <div className="">
      <div className="uk-width-1-1 uk-row-first uk-margin-large-bottom">
        <Heading content={props.project.name} />
        <Subheading content="Project Info" />
      </div>

      {props.project.description.length > 500 ? (
        <p className="uk-text-justify uk-column-1-1@s uk-column-1-2@m">
          {props.project.description}
        </p>
      ) : (
        <p className="uk-text-justify uk-width-1-2">
          {props.project.description}
        </p>
      )}

      <p className="uk-width-1-1@s uk-width-1-3@m uk-article-meta uk-text-capitalize uk-text-small ">
        <b>Creative Fields:</b> {fields}
        <br />
        <b>Project Tags:</b> {tags}
        <br />
        <b>Mediums Used:</b> {tools}
        <br />
        <b>Date Posted:</b> {created}
      </p>
    </div>
  );
};

export default ProjectPage;
