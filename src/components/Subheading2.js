import React from "react";

const Subheading = props => {
  return (
    <p className="uk-h4 uk-text-capitalize uk-text-muted uk-margin-small-bottom">
      {props.content}
    </p>
  );
};

export default Subheading;
