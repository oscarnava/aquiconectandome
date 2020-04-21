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
    const { cards } = this.state;
    // eslint-disable-next-line no-bitwise
    let byDate = (dataManager.getToday() - dataManager.getStartDay() + 2) >> 1;
    let byCount = 5;

    const getHidden = (id) => {
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
        { cards.map(
          ({
            id, img, header, text, video, audio,
          // eslint-disable-next-line no-plusplus
          }) => <IndexCard key={id} id={id} image={img} header={header} text={text} video={video} audio={audio} hidden={getHidden(id)} />,
        ) }
      </div>
    );
  }
}

IndexContainer.propTypes = {
  cards: PropTypes.array,
};

export default IndexContainer;
