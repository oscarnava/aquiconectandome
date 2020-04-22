import React from 'react';
import request from './services/mockAPI';
import dataManager from './services/dataManager';
import IndexContainer from './containers/indexContainer';
import CubeMenu from './components/cubeMenu';
import './styles/app.sass';

const themeOpts = {
  esp: {
    amate: '🕸\nAmate',
    wood: '🌲\nMadera',
    day: '🌞\nDía',
    night: '🌙\nNoche',
  },
  eng: {
    amate: '🕸\nAmate',
    wood: '🌲\nWood',
    day: '🌞\nDay',
    night: '🌙\nNight',
  },
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = dataManager.getState('App', { theme: 'amate' });
    this.indexContainer = React.createRef();
  }

  componentDidMount() {
    this.fetchIndexContents();
  }

  onMenuSelect = (theme) => {
    this.setState({ theme });
    dataManager.putState('App', { theme });
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
          selected={theme}
          options={themeOpts.esp}
          width="4.7rem"
          height="3rem"
          onSelect={this.onMenuSelect}
        />
        <IndexContainer ref={this.indexContainer} />
      </div>
    );
  }
}
