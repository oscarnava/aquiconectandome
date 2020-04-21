import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/cubeMenu.sass';

export default class CubeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
  }

  onClick = () => {
    const { options, onSelect } = this.props;
    let { active } = this.state;
    active = (active + 1) % options.length;
    this.setState({ active });
    onSelect(options[active], active);
  }

  render() {
    const { options, width, height } = this.props;
    const { active } = this.state;
    const delta = 360 / options.length;

    return (
      <div className="cube-menu" style={{ width, height }} onClick={this.onClick}>
        <div className="cube" style={{ transform: `translateZ(-100px) rotateY(-${active * delta}deg)` }}>
          { options.map((label, i) => {
            const key = label.toLowerCase().replace(/\s+/g, '-');
            return (
              <div
                key={`face-${key}`}
                className={`cube-face cube-face-${key}`}
                style={{ transform: `rotateY(${i * delta}deg) translateZ(100px)`, width, height }}
              >
                {label}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

CubeMenu.propTypes = {
  options: PropTypes.array.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

CubeMenu.defaultProps = {
  width: '200px',
  height: '200px',
};
