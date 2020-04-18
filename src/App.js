import React from 'react';
import request from './services/mockAPI';
import IndexContainer from './containers/indexContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.indexContainer = React.createRef();
  }

  componentDidMount() {
    this.fetchIndexContents();
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
    return (
      <div className="app wood">
        <IndexContainer ref={this.indexContainer} />
      </div>
    );
  }
}
