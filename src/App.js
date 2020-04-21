import React from 'react';
import request from './services/mockAPI';
import IndexContainer from './containers/indexContainer';
import CubeMenu from './components/cubeMenu';
import './styles/app.sass';

const themeOpts = {
  esp: {
    amate: 'Amate',
    wood: 'Madera',
    day: 'Día',
    night: 'Noche',
  },
  eng: {
    amate: 'Amate',
    wood: 'Wood',
    day: 'Day',
    night: 'Night',
  },
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: 'amate' };
    this.indexContainer = React.createRef();
  }

  componentDidMount() {
    this.fetchIndexContents();
  }

  onMenuSelect = (theme) => {
    this.setState({ theme });
  }

  async fetchIndexContents() {
    await request({ language: 'esp', cmd: 'bitacora' })
      .then((cards) => {
        // console.log('App', { cards });
        if (this.indexContainer.current) {
          this.indexContainer.current.cardsInfo = cards;
        }
      });
  }

  render() {
    const { theme } = this.state;
    return (
      <div className={`app ${theme}`}>
        <CubeMenu
          options={themeOpts.esp}
          width="6rem"
          height="1.8rem"
          onSelect={this.onMenuSelect}
        />
        <IndexContainer ref={this.indexContainer} />
      </div>
    );
  }
}
