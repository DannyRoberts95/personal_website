import React from "react";

class VideoModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { module: props.module, iframeLoaded: false };
  }

  render() {
    return (
      <div
        className="uk-width-1-1@s uk-width-2-3@m  uk-margin-large-bottom"
        width="1920"
        height="1080"
      >
        <iframe
          id="module_frame"
          src={this.state.module.src}
          width="1920"
          height="1080"
          frameBorder="0"
          allowFullScreen={true}
          uk-responsive="true"
          uk-video="automute: true; autoplay: true"
          className="uk-responsive-width"
        />
      </div>
    );
  }
}

export default VideoModule;
