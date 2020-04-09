import React from 'react';
import PropTypes from 'prop-types';

const STATUS_DONE = 'DONE';
const STATUS_PENDING = 'PENDING';
// const STATUS_UNAVAILABLE = 'UNAVAILABLE';

class IndexCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: STATUS_PENDING };
  }

  get videoFrame() {
    const { video, image } = this.props;
    console.log({ image, video });
    return video ? (
      <div className="iframe-container">
        <iframe title={image} src={`https://www.youtube.com/embed/${video}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    ) : '';
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
            {this.videoFrame}
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
