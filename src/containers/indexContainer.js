import React from 'react';
import PropTypes from 'prop-types';
import autosize from 'autosize';
import IndexCard from '../components/indexCard';
import '../styles/cards.sass';

class IndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }

  componentDidUpdate() {
    console.log('Autosize');
    autosize(document.querySelectorAll('textarea'));
  }

  set cardsInfo(cards) {
    this.setState({ cards });
  }

  render() {
    const { cards } = this.state;
    console.log('IndexContainer', { cards });
    return (
      <div className="index-container">
        { cards.map(({
          id, img, text, video,
        }) => <IndexCard key={id} image={img} text={text} video={video} />) }
      </div>
    );
  }
}

IndexContainer.propTypes = {
  cards: PropTypes.array,
};

export default IndexContainer;
