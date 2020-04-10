import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const STATUS_DONE = 'DONE';
const STATUS_PENDING = 'PENDING';
// const STATUS_UNAVAILABLE = 'UNAVAILABLE';
// monplaisir-01-hlice.mp3

class IndexCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: STATUS_PENDING };
  }

  get multimediaFrame() {
    const { video, audio, image } = this.props;
    console.log({ image, video, audio });
    if (video) {
      return (
      // <div className="iframe-container">
      //   <iframe title={image} src={`https://www.youtube.com/embed/${video}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      // </div>
        <div className="video-container">
          <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        </div>
      );
    }

    if (audio) {
      return (
        <div className="audio-container">
          <ReactPlayer url={`https://monstruo.me/aquiconectando/snd/${audio}`} controls width="100%" height="100%" />
        </div>
      );
    }

    return '';
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
            {this.multimediaFrame}
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
