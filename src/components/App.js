import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewQuestion from './NewQuestion'
import LogIn from './LogIn'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
import Nav from './Nav'
import { LoadingBar } from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser, loading } = this.props
    return (
      <Router>
        <div className='container'>
          <LoadingBar />
          <Nav user={this.props.users[authedUser]} dispatch={this.props.dispatch} />
          {!authedUser
            ? <LogIn />
            : loading
              ? null
              : <div>
                  <Route path='/' exact component={QuestionPage}/>
                  <Route path='/new' exact component={NewQuestion}/>
                  <Route path='/ranking' exact component={LeaderBoard}/>
                </div>
          }
        </div>
      </Router>
    );
  }
}

function mapStateToProps({users, authedUser}) {
  return {
    loading: authedUser == null,
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(App);
