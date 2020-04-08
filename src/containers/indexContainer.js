import React from 'react';
import PropTypes from 'prop-types';
import IndexCard from '../components/indexCard';

class IndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }

  set cardsInfo(cards) {
    this.setState({ cards });
  }

  render() {
    const { cards } = this.state;
    console.log('IndexContainer', { cards });
    return (
      <div className="index-container">
        { cards.map(({ id, img }) => <IndexCard key={id} image={img} />) }
      </div>
    );
  }
}

IndexContainer.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default IndexContainer;
