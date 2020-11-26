import React from 'react';
import { backgroundStyle, buttonStyle } from './style';
import IgPost from './assets/igpost.jpg';
import Faq from './assets/faq.svg';
import Data from './assets/test.json';

const About = () => {
  const handleClick = () => {
    alert(Data.name);
  };

  return (
    <div className={backgroundStyle}>
      <button className={buttonStyle} onClick={handleClick}>Test button</button>
      <img width={400} height={400} src={IgPost} />
      <img width={400} height={400} src={Faq} />
    </div>
  );
};
export default About;
