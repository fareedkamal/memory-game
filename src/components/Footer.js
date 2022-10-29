import React from 'react';
import githubIcon from '../assets/images/github-logo.png';

function GithubLogo() {
  const style = {
    height: '30px',
  };
  return (
    <a href="github.com/fareedkamal">
      <img style={style} src={githubIcon} alt="" />
    </a>
  );
}

function Footer() {
  const style = {
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
    width: '100%',
    justifyContent: 'center',
    height: '100px',
    backgroundColor: '#f37781',
    border: '2px solid #af4144',
    color: 'white',
  };
  return (
    <div style={style}>
      <p>Copyright © 2022 fareedkamal</p>
      <GithubLogo />
    </div>
  );
}

export default Footer;
