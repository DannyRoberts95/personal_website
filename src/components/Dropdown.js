import React from "react";
class DropDown extends React.Component {
  render() {
    const options = this.props.options.map(item => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });
    return (
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field is-fullWidth">
            <div className="select has-text-centered">
              <select
                value={this.props.selected}
                name={this.props.name}
                onChange={this.props.handleChange}
              >
                {options}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DropDown;
