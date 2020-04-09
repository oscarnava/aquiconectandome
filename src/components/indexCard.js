import React from 'react';
import PropTypes from 'prop-types';

const STATUS_DONE = 'DONE';
const STATUS_PENDING = 'PENDING';
const STATUS_UNAVAILABLE = 'UNAVAILABLE';

class IndexCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: STATUS_PENDING };
  }

  get content() {
    const { status } = this.state;
    const { image, text } = this.props;
    switch (status) {
      case STATUS_PENDING:
        return (
          <>
            <img src={`img/${image}`} alt="Card" />
            <p>{text}</p>
            <textarea placeholder="Captura aquí tus pensamientos" rows="2" />
          </>
        );
      case STATUS_DONE:
        return <img src={`img/${image}`} alt="Card" />;

      default:
        return '';
    }
  }

  render() {
    return (
      <div className="index-card">
        { this.content }
      </div>
    );
  }
}


IndexCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default IndexCard;
