import React from "react";

class TextModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { module: props.module };
  }
  render() {
    console.log(this.state.module);
    return (
      <div className="uk-width-1-1@s uk-width-2-3@m uk-row-first uk-margin-large-medium uk-align-center">
        <div>{this.state.module.text_plain}</div>
      </div>
    );
  }
}

export default TextModule;
