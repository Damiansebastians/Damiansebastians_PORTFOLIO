import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/damian-sebastian-silvera-collazo-/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin style={{ fontSize: "26px" }} />
      </a>
      <a
        href="https://github.com/Damiansebastians"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub style={{ fontSize: "26px" }} />
      </a>
      <a href="http://damiasebastians.es/" target="_blank" rel="noreferrer">
        <FaGlobe style={{ fontSize: "26px" }} />
      </a>
    </div>
  );
};

export default HeaderSocials;
