import React from 'react';
import PropTypes from 'prop-types';

function IndexCard({ image }) {
  return (
    <div className="index-card">
      <img src={`img/${image}`} alt="Card" />
    </div>
  );
}

IndexCard.propTypes = {
  image: PropTypes.string.isRequired,
};

export default IndexCard;
