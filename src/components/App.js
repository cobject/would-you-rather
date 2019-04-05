import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.store.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        App
      </div>
    );
  }
}

export default App;
