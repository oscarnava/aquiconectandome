import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import autosize from 'autosize';
import dataManager from '../services/dataManager';
import Globals from '../globals';

const {
  SOUND_URL,
  STATUS_DONE,
  STATUS_PENDING,
  STATUS_UNAVAILABLE,
} = Globals;

const imageURL = (imgName) => `${process.env.PUBLIC_URL}/img/${imgName}`;
const soundURL = (sndName) => `${process.env.PUBLIC_URL}/${SOUND_URL}/${sndName}`;

class IndexCard extends React.Component {
  constructor(props) {
    super(props);
    const { id, hidden } = props;
    const memo = dataManager.getMemo(id);
    let { status } = dataManager.getState(id, { status: STATUS_PENDING });
    if (memo === '') status = STATUS_PENDING;
    if (hidden) status = STATUS_UNAVAILABLE;
    this.state = { status, memo };
    this.textArea = React.createRef();
  }

  componentDidUpdate() {
    const { status } = this.state;
    if (status === STATUS_PENDING && this.textArea.current) {
      autosize(this.textArea.current);
    }
  }

  onMemoChange = (id, e) => {
    const { target: { value } } = e;
    dataManager.putMemo(id, value);
    this.setState({ memo: value });
  }

  onDoneClick = (id, e) => {
    e.preventDefault();
    const { memo } = this.state;
    if (memo.trim() > '') {
      const stt = { status: STATUS_DONE };
      dataManager.putState(id, stt);
      this.setState(stt);
    }
  }

  onEditClick = (id, e) => {
    e.preventDefault();
    const stt = { status: STATUS_PENDING };
    dataManager.putState(id, stt);
    this.setState(stt);
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
          <ReactPlayer url={soundURL(audio)} controls width="100%" height="100%" />
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
          <div id={`card-${id}`} className="card-pending">
            <img src={imageURL(image)} alt={`Card for day ${id}`} />
            <p>{text}</p>
            {this.multimediaFrame}
            <div className="memo">
              <button className="btn done" type="button" data-id={id} onClick={this.onDoneClick.bind(this, id)}>
                <FontAwesomeIcon icon={faCheckCircle} />
              </button>
              <textarea ref={this.textArea} placeholder="Captura aquí tus pensamientos" rows="2" onChange={this.onMemoChange.bind(this, id)} value={memo} />
            </div>
          </div>
        );

      case STATUS_DONE:
        return (
          <div id={`card-${id}`} className="card-done">
            <img src={imageURL(image)} alt={`Card for day ${id}`} />
            <p>{text}</p>
            {this.multimediaFrame}
            <div className="memo">
              <button className="btn edit" type="button" onClick={this.onEditClick.bind(this, id)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              {/* eslint-disable-next-line react/no-array-index-key */}
              { memo.split('\n').map((line, idx) => <div key={`line-${idx}`} className="text-line">{line}</div>) }
            </div>
          </div>
        );

      default:
        return (<div id={`card-${id}`} className="card-unavailable" />);
    }
  }

  render() {
    const { status } = this.state;

    if (status === STATUS_UNAVAILABLE) {
      return this.content;
    }

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
  hidden: PropTypes.bool,
};

IndexCard.defaultProps = {
  video: null,
  audio: null,
  hidden: false,
};

export default IndexCard;
