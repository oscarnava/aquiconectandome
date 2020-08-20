import React from 'react';
import PropTypes from 'prop-types';
import dataManager from '../services/dataManager';
import IndexCard from '../components/indexCard';
import '../styles/cards.sass';
import Globals from '../globals';

const { DEFAULT_LANGUAGE } = Globals;

const IndexContainer = ({ cards, language }) => {
  // eslint-disable-next-line no-bitwise
  let byDate = (dataManager.getToday() - dataManager.getStartDay() + 2) >> 1;
  let byCount = 3;

  const isHidden = (id) => {
    const done = dataManager.cardDone(id);
    byDate -= 1;
    if (done) {
      return false;
    }

    byCount -= 1;
    return (byDate < 0) || (byCount < 0);
  };

  return (
    <div className="index-container">
      { cards.map((card) => {
        const { id } = card;
        const { img, head, text, video, audio, links } = Object.assign(card, card[`$_${language}`]);
        return (<IndexCard key={id} language={language} id={id} image={img} header={head} text={text} video={video} audio={audio} links={links} hidden={isHidden(id)} />);
      }) }
    </div>
  );
};

export default IndexContainer;

IndexContainer.propTypes = {
  language: PropTypes.string,
  cards: PropTypes.arrayOf(IndexCard).isRequired,
};
IndexContainer.defaultProps = { language: DEFAULT_LANGUAGE };
