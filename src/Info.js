import React from "react";
import "./css/style.css";
import Heading from "./components/Heading.js";
import Subheading from "./components/Subheading.js";
import Subheading2 from "./components/Subheading2.js";

class ContactPage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="uk-grid-large " uk-grid="true">
        <div className="uk-width-1-4">
          <div className="">
            <Subheading content="E-mail" />
            <p>For and questions or enquires feel free to reach out.</p>
            <p>
              <b>danielrdhr@gmail.com</b>
            </p>

            <Subheading content="Social" />
            <p>Why not follow me on social media?</p>
            <ul class="uk-list  uk-list-bullet">
              <li>
                <a class="uk-link-muted" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a class="uk-link-muted" href="#">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="uk-width-3-4">
          <div className="">
            <Heading content="About Me" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    );
  }
} //END OF CLASS

export default ContactPage;
