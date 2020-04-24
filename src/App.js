import React from 'react';
import request from './services/mockAPI';
import dataManager from './services/dataManager';
import i18n from './services/i18n';
import IndexContainer from './containers/indexContainer';
import CubeMenu from './components/cubeMenu';
import './styles/app.sass';
import Globals from './globals';

const { DEFAULT_LANGUAGE } = Globals;

const themeOpts = {
  es: {
    amate: '🕸\nAmate',
    wood: '🌲\nMadera',
    day: '🌞\nDía',
    night: '🌙\nNoche',
  },
  en: {
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
    await request({ cmd: 'bitacora', DEFAULT_LANGUAGE })
      .then((cards) => {
        if (this.indexContainer.current) {
          this.indexContainer.current.cardsInfo = cards;
        }
      });
  }

  render() {
    const { theme } = this.state;
    return (
      <main className={`app ${theme}`}>
        <header className={theme}>{i18n('AppName')}</header>
        <CubeMenu
          selected={theme}
          options={themeOpts[DEFAULT_LANGUAGE] || themeOpts[DEFAULT_LANGUAGE]}
          width="5.1rem"
          height="3.3rem"
          onSelect={this.onMenuSelect}
        />
        <IndexContainer ref={this.indexContainer} language={DEFAULT_LANGUAGE} />
      </main>
    );
  }
}
