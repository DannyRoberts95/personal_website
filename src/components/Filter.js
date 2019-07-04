import React from "react";
import Heading from "./Heading.js";
import Subheading from "./Subheading.js";
import Subheading2 from "./Subheading2.js";

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const fieldButtons = this.props.fieldValues.map((item, i) => {
      return (
        <button
          key={item}
          className="uk-button uk-button-default uk-button-small uk-margin-small-right uk-margin-small-bottom"
          onClick={this.props.handleChange}
          value={item}
          name="fieldSortPreference"
        >
          {item}
        </button>
      );
    });

    const yearButtons = this.props.yearValues.map((item, i) => {
      return (
        <button
          key={item}
          className="uk-button uk-button-default uk-button-small uk-margin-small-right uk-margin-small-bottom"
          onClick={this.props.handleChange}
          value={item}
          name="yearSortPreference"
        >
          {item}
        </button>
      );
    });

    const filtertext =
      (this.props.fieldSortPreference === "All"
        ? `Displaying all projects from `
        : `Displaying ${this.props.fieldSortPreference} projects from `) +
      (this.props.yearSortPreference === "All"
        ? `all years.`
        : `${this.props.yearSortPreference}`);

    return (
      <div className="uk-width-1-4 uk-margin-medium-bottom">
        <div className="uk-width-1-1 uk-margin-medium-bottom">
          <Subheading content="Year" />
          <div className="">{yearButtons}</div>
        </div>

        <div className=" uk-width-1-1  uk-margin-medium-bottom">
          <Subheading content="Creative Fields" />
          <div className="">{fieldButtons}</div>
        </div>

        <div className="uk-width-1-1">
          <Subheading2 content={filtertext} />
        </div>
      </div>
    );
  }
} //END OF CLASS

export default Filter;
