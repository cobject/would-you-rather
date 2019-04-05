import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Result from './Result'
import { LoadingBar } from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <Result id={'6ni6ok3ym7mf1p33lnez' /* FIXME */}/>}
      </div>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser == null

  }
}

export default connect(mapStateToProps)(App);
