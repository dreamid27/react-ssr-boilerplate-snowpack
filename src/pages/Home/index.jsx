import React from 'react';
import { Helmet } from 'react-helmet';
import { PrimaryButton } from '@fluentui/react';
import Gambar1 from '../About/assets/faq.svg';

const Home = () => {
  const handleClick = () => alert('Hallo Indonesia');
  const clickMee = () => alert('Klik Me');

  return (
    <>
      <Helmet>
        <title>Custom index</title>
      </Helmet>
      <div>
        <p>Hello, Faris Here</p>
        <PrimaryButton onClick={handleClick}> Hello Indonesia </PrimaryButton>
        <div>
          <img alt="halo" src={Gambar1} />
        </div>
        <PrimaryButton onClick={clickMee}> Klik Aku </PrimaryButton>
      </div>
    </>
  );
};

export default Home;
