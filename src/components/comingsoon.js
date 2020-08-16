import React from 'react';
import Globals from '../globals';
import '../styles/comingsoon.sass';

const {
  DEFAULT_LANGUAGE,
} = Globals;

function ComingSoon() {
  const link = (sufix) => `${process.env.PUBLIC_URL}/img/triptico-${DEFAULT_LANGUAGE}-${sufix}.jpg`;
  return (
    <div className="coming-soon">
      <div className="container">
        <img src={link('a')} alt="triptico-a" />
        <img src={link('b')} alt="triptico-b" />
        <img src={link('c')} alt="triptico-c" />
      </div>
    </div>
  );
}

export default ComingSoon;
