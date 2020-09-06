import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDev,
  faLinkedin,
  faGithub,
  faWordpressSimple
} from "@fortawesome/free-brands-svg-icons";

import{
  faEnvelope
} from "@fortawesome/fontawesome-free-solid";

export default function SocialFollow() {
  return (
    <div className="social-container">

      <a href="https://github.com/chethanagopinath/"
      className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a href="https://www.linkedin.com/in/chethana-gopinath/"
      className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a href="https://dev.to/chethanagopinath"
      className="dev social">
        <FontAwesomeIcon icon={faDev} size="2x" />
      </a>

      <a href="mailto:cgopina1@binghamton.edu"
      className="email social">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>

      <a href="https://apennyeveryweek.wordpress.com/"
      className="wordpress social">
        <FontAwesomeIcon icon={faWordpressSimple} size="2x" />
      </a>




    </div>
  );
}