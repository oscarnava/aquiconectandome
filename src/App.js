import React from 'react';
import request from './services/mockAPI';
import dataManager from './services/dataManager';
import IndexContainer from './containers/indexContainer';
import CubeMenu from './components/cubeMenu';
import './styles/app.sass';

const language = 'esp';

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
    await request({ cmd: 'bitacora', language })
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
      <main className={`app ${theme}`}>
        <header className={theme}>Mi bitácora</header>
        <CubeMenu
          selected={theme}
          options={themeOpts.esp}
          width="5.1rem"
          height="3.3rem"
          onSelect={this.onMenuSelect}
        />
        <IndexContainer ref={this.indexContainer} language={language} />
      </main>
    );
  }
}
