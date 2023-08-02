import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { CgDesktop } from 'react-icons/cg'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/damian-sebastian-silvera-collazo-/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Damiansebastians" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="http://damiasebastians.es/" target="_blank" rel="noreferrer" ><CgDesktop /></a>
    </div>
  )
}

export default HeaderSocials