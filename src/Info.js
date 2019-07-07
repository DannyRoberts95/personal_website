import React from "react";
import "./css/style.css";
import Heading from "./components/Heading.js";
import Subheading from "./components/Subheading.js";
import Subheading2 from "./components/Subheading2.js";

class ContactPage extends React.Component {
  render() {
    return (
      <div
        className="uk-grid-large "
        uk-grid="true"
        uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100"
      >
        <div className="uk-width-1-1">
          <Heading content="Information" />
        </div>
        <div className="uk-width-1-3@m uk-width-1-2@s">
          <div className="">
            <Subheading content="Contact" />
            <Subheading2 content="E-mail" />
            <p>For and questions or enquires feel free to reach out.</p>
            <p>
              <b>danielrdhr@gmail.com</b>
            </p>

            <Subheading2 content="Social" />
            <p>Why not follow me on social media?</p>
            <ul className="uk-list  uk-list-bullet">
              <li>
                <a
                  className="uk-link-muted"
                  href="https://www.instagram.com/javawax/"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="uk-width-2-3@m uk-width-1-1@s">
          <Subheading content="About me" />
          <Subheading2 content="Who am I?" />
          <p className="uk-text-justify uk-column-1-1@s uk-column-1-2@m">
            Hi, my name is Dan. I am from Dublin, Ireland. I like black coffee,
            good books, beautiful things, comfy chairs, big ideas and odd
            places.
            <br />I am a designer and artist who enjoys working at the
            intersection of art and technology. I hold a first class honors
            degree in Creative Computing from the Dunlaoghire Institute of Art,
            Design and Technology.
          </p>
          <Subheading2 content="What do I do?" />
          <p className="uk-text-justify uk-column-1-1@s uk-column-1-2@m">
            My work explores the areas of creative programming, generative
            design, interactive graphics, data visualisation, human/ computer
            interaction, UI design and web desgn. I take pride in the diversity
            of my work which ranges from traditonal ink illustration, to this
            website, to interactive digital sceneography. I believe artistic
            variety is key to avoiding creative stagnation and so I create
            things using as many mediums as I can as often a I'm able.
          </p>
        </div>
      </div>
    );
  }
} //END OF CLASS

export default ContactPage;
