import React from "react";

class ImageModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { module: props.module };
  }
  render() {
    console.log(this.state.module);
    return (
      <div className="uk-width-1-1@s uk-width-2-3@m uk-row-first uk-align-center uk-margin-medium-bottom ">
        <div uk-lightbox="true" className="uk-transition-toggle">
          <a href={this.state.module.sizes.max_1920}>
            <img
              className="uk-transition-scale-up uk-transition-opaque"
              src={this.state.module.sizes.max_1920}
              width="100%"
              maxwidth="1920"
              alt=""
              uk-img="true"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default ImageModule;
