import React from "react";
import "./css/style.css";

class LandingPage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    console.log("land");
    return (
      <div className="uk-width-1-1 uk-row-first uk-margin-large-bottom">
        <p className=" uk-heading-small uk-heading-line">
          <span>Landing Page under construction.</span>
        </p>
        <p>In the mean time, why not explore my portfolio gallery?</p>
      </div>
    );
  }
} //END OF CLASS

export default LandingPage;
