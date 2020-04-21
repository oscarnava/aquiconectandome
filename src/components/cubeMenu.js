import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/cubeMenu.sass';

export default class CubeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
  }

  get keys() {
    // eslint-disable-next-line react/destructuring-assignment
    if (!this.$keys) this.$keys = Object.keys(this.props.options);
    return this.$keys;
  }

  onClick = () => {
    const { options, onSelect } = this.props;
    let { active } = this.state;
    active = (active + 1) % this.keys.length;
    this.setState({ active });
    onSelect(this.keys[active], active, options[active]);
  }

  render() {
    const { options, width, height } = this.props;
    const { active } = this.state;
    const delta = 360 / this.keys.length;

    return (
      <div className="cube-menu" style={{ width, height }} onClick={this.onClick}>
        <div className="cube" style={{ transform: `translateZ(-100px) rotateY(-${active * delta}deg)` }}>
          { this.keys.map((key, i) => (
            <div
              key={`face-${key}`}
              className={`cube-face cube-face-${key}`}
              style={{ transform: `rotateY(${i * delta}deg) translateZ(calc(${width}/2))`, width, height }}
            >
              {options[key]}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

CubeMenu.propTypes = {
  options: PropTypes.object.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

CubeMenu.defaultProps = {
  width: '200px',
  height: '200px',
};
