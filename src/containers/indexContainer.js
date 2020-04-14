import React from 'react';
import PropTypes from 'prop-types';
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
    return (
      <div className="index-container">
        { cards.map(
          ({
            id, img, text, video, audio,
          }) => <IndexCard key={id} id={id} image={img} text={text} video={video} audio={audio} />,
        ) }
      </div>
    );
  }
}

IndexContainer.propTypes = {
  cards: PropTypes.array,
};

export default IndexContainer;
