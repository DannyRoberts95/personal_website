import React from "react";
import { Link } from "react-router-dom";

class ProjectModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { project: this.props.data };
  }

  render() {
    const project = this.state.project;
    const thumbnail = project.covers[808];

    return (
      <div className="uk-text-center uk-width-1-1@s uk-width-1-2@m uk-width-1-3@l">
        <Link to={`/project_page/${project.id}`}>
          <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
            <img className="uk-border-rounded" src={thumbnail} alt="" />
            <div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
              <p className="uk-h3">{project.name}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProjectModule;
