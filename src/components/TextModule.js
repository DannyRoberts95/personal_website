import React from "react";

class TextModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { module: props.module };
  }
  render() {
    return (
      <div className="uk-width-1-1@s uk-width-2-3@m  uk-margin-large-bottom ">
        {this.state.module.text_plain}
      </div>
    );
  }
}

export default TextModule;
