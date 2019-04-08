import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
// import Result from './Result'
// import NewQuestion from './NewQuestion'
// import LogIn from './LogIn'
import Answer from './Answer'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
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
          // : <Result id={'6ni6ok3ym7mf1p33lnez' /* FIXME */}/>
          // : <NewQuestion/>
          // : <LogIn />
          // : <Answer id={'8xf0y6ziyjabvozdd253nd'}/>
          : <QuestionPage />
          // : <LeaderBoard />
        }
        {/* <LeaderBoard /> */}
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
