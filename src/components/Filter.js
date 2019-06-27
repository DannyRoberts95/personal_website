import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const fieldButtons = this.props.fieldValues.map((item, i) => {
      return (
        <button
          key={item}
          className="uk-button uk-button-default uk-button-medium uk-margin-small-right uk-margin-small-bottom"
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
          className="uk-button uk-button-default uk-button-medium uk-margin-small-right "
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
      <div>
        <p className="uk-h2 uk-text-secondary uk-margin-medium-bottom">
          <span>Filter Projects</span>
        </p>

        <p className=" uk-h3 uk-heading-line">
          <span>Year</span>
        </p>
        <div className="uk-margin-medium-bottom">{yearButtons}</div>

        <p className=" uk-h4 uk-heading-line">
          <span>Creative Field</span>
        </p>
        <div className="uk-margin-medium-bottom">{fieldButtons}</div>

        <p className="uk-h4 uk-text-capitalize uk-margin-large-bottom">
          {filtertext}
        </p>

        <div />
      </div>
    );
  }
} //END OF CLASS

export default Filter;
