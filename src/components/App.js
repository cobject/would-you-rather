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
import QuestionDetail from './QuestionDetail'
import PageNotFound from './PageNotFound'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser, loading, users } = this.props
    console.log('app', this.props)
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
                    <Route path='/questions/:id' exact component={QuestionDetail} />
                    <Route path='/leaderboard' exact component={LeaderBoard}/>
                    <Route path='/*' component={PageNotFound}/>
                  </div>
            }
          </div>
      </Router>
    );
  }
}

function mapStateToProps({users, authedUser}, props) {
  console.log('app', props)
  return {
    loading: Object.keys(users).length === 0,
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(App);
