import React from 'react';
import PropTypes from 'prop-types';
import dataManager from '../services/dataManager';
import IndexCard from '../components/indexCard';
import '../styles/cards.sass';

class IndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }

  //TODO: Determine if card should be available for editing.

  set cardsInfo(cards) {
    this.setState({ cards });
  }

  render() {
    const { language } = this.props;
    const { cards } = this.state;
    // eslint-disable-next-line no-bitwise
    let byDate = (dataManager.getToday() - dataManager.getStartDay() + 2) >> 1;
    let byCount = 5;

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
          const { img, head, text, video, audio } = Object.assign(card, card[`$_${language}`]);
          return (<IndexCard key={id} language={language} id={id} image={img} header={head} text={text} video={video} audio={audio} hidden={isHidden(id)} />);
        }) }
      </div>
    );
  }
}

export default IndexContainer;

IndexContainer.propTypes = { language: PropTypes.string };
IndexContainer.defaultProps = { language: 'esp' };
