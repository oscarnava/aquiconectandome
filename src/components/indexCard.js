import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Globals from '../globals';
import dataManager from '../services/dataManager';

const STATUS_DONE = 'DONE';
const STATUS_PENDING = 'PENDING';
// const STATUS_UNAVAILABLE = 'UNAVAILABLE';

class IndexCard extends React.Component {
  constructor(props) {
    super(props);
    const memo = dataManager.getMemo(props.id);
    const status = memo !== '' ? STATUS_DONE : STATUS_PENDING;
    this.state = { status, memo };
  }

  onMemoChange = (e) => {
    const { target: { dataset: { id }, value } } = e;
    dataManager.putMemo(id, value);
    this.setState({ memo: value });
  }

  get multimediaFrame() {
    const { video, audio } = this.props;
    if (video) {
      return (
        <div className="video-container multimedia">
          <ReactPlayer url={`https://www.youtube.com/watch?v=${video}`} controls width="100%" height="100%" />
        </div>
      );
    }

    if (audio) {
      return (
        <div className="audio-container multimedia">
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
          <div className="pending">
            <img src={`img/${image}`} alt={`Card for day ${id}`} />
            <p>{text}</p>
            {this.multimediaFrame}
            <div className="memo">
              <button className="btn done" type="button">✔</button>
              <textarea placeholder="Captura aquí tus pensamientos" rows="2" data-id={id} onChange={this.onMemoChange} value={memo} />
            </div>
          </div>
        );

      case STATUS_DONE:
        return (
          <div className="done">
            <img src={`img/${image}`} alt={`Card for day ${id}`} />
            <p>{text}</p>
            {this.multimediaFrame}
            <div className="memo">
              <button className="btn edit" type="button">Edit</button>
              <p>{memo}</p>
            </div>
          </div>
        );

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
