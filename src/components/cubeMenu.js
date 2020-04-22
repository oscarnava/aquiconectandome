import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/cubeMenu.sass';

export default class CubeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { active: Math.max(this.values.indexOf(props.selected), 0) };
  }

  get values() {
    // eslint-disable-next-line react/destructuring-assignment
    if (!this.$vals) this.$vals = Object.keys(this.props.options);
    return this.$vals;
  }

  onClick = () => {
    const { options, onSelect } = this.props;
    let { active } = this.state;
    active = (active + 1) % this.values.length;
    this.setState({ active });
    onSelect(this.values[active], active, options[active]);
  }

  render() {
    const { options, width, height } = this.props;
    const { active } = this.state;
    const delta = 360 / this.values.length;

    return (
      <div className="cube-menu" style={{ width, height }} onClick={this.onClick}>
        <div className="cube" style={{ transform: `translateZ(-100px) rotateY(-${active * delta}deg)` }}>
          { this.values.map((key, i) => (
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
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

CubeMenu.defaultProps = {
  selected: '',
  width: '200px',
  height: '200px',
};
