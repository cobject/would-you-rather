import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LoadingBar } from 'react-redux-loading'
// acions
import { handleInitialData } from '../actions/shared'
// components
import NewQuestion from './NewQuestion'
import LogIn from './LogIn'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
import Result from './Result'
import Answer from './Answer'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser, loading, users } = this.props
    return (
      <Router>
        <div className='container'>
          <LoadingBar />
          <Nav user={users[authedUser]} dispatch={this.props.dispatch} />

          {loading === true
            ? null
            : !authedUser
              ? <LogIn />
              : <div>
                  <Route path='/' exact component={QuestionPage}/>
                  <Route path='/add' exact component={NewQuestion}/>
                  <Route path='/question/:id' exact component={Result} />
                  <Route path='/answer/:id' exact component={Answer} />
                  <Route path='/leaderboard' exact component={LeaderBoard}/>
                </div>
          }
        </div>
      </Router>
    );
  }
}

function mapStateToProps({users, authedUser}) {
  return {
    loading: users === null,
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(App);
