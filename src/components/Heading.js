import React from "react";

const Subheading = props => {
  return (
    <p className="uk-h2 uk-text-uppercase uk-margin-large-bottom">
      {props.content}
    </p>
  );
};

export default Subheading;