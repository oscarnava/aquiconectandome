import React from 'react';
import request from './services/mockAPI';
import dataManager from './services/dataManager';
import IndexContainer from './containers/indexContainer';
import CubeMenu from './components/cubeMenu';
import './styles/app.sass';

const themeOpts = {
  esp: {
    amate: 'Tema: Amate',
    wood: 'Tema: Madera',
    day: 'Tema: Día',
    night: 'Tema: Noche',
  },
  eng: {
    amate: 'Theme: Amate',
    wood: 'Theme: Wood',
    day: 'Theme: Day',
    night: 'Theme: Night',
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
          width="5rem"
          height="3rem"
          onSelect={this.onMenuSelect}
        />
        <IndexContainer ref={this.indexContainer} />
      </div>
    );
  }
}
