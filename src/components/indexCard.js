import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Globals from '../globals';
import dataManager from '../services/dataManager';

const STATUS_DONE = 'DONE';
const STATUS_PENDING = 'PENDING';
// const STATUS_UNAVAILABLE = 'UNAVAILABLE';
// monplaisir-01-hlice.mp3

class IndexCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: STATUS_PENDING,
      memo: dataManager.getMemo(props.id),
    };
  }

  onMemoChange = (e) => {
    const { target: { dataset: { id }, value } } = e;
    console.log(e, { id, value });
    dataManager.putMemo(id, value);
    this.setState({ memo: value });
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
          <ReactPlayer url={`${Globals.SOUND_URL}/${audio}`} controls width="100%" height="100%" />
        </div>
      );
    }

    return '';
  }

  get content() {
    const { status, memo } = this.state;
    const { id, image, text } = this.props;
    switch (status) {
      case STATUS_PENDING:
        return (
          <>
            <img src={`img/${image}`} alt="Card" />
            <p>{text}</p>
            {this.multimediaFrame}
            <textarea placeholder="Captura aquí tus pensamientos" rows="2" data-id={id} onChange={this.onMemoChange} value={memo} />
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

// Mi mayor temor es perder a mi güerita 👧

IndexCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  video: PropTypes.string,
  audio: PropTypes.string,
  text: PropTypes.string.isRequired,
};

IndexCard.defaultProps = {
  video: null,
  audio: null,
};

export default IndexCard;
