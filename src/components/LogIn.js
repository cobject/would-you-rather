import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/authedUser'

class LogIn extends Component {
    state = {
        user: ''
    }

    handleLogIn = (e) => {
        e.preventDefault()
        if(this.state.user === '') {
            this.props.dispatch(logIn(this.props.users[0].id))    
        } else {
            this.props.dispatch(logIn(this.state.user))
        }
    }

    handleSelect = (e) => {
        e.preventDefault()
        this.setState({
            user: e.target.value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <div>
                    <h1>Welcome to the would you rather app</h1>
                </div>
                <div>
                    <div>
                        <h3>sign in</h3>
                        <select onChange={this.handleSelect}>
                            {this.props.users.map( (user) => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className='btn' onClick={this.handleLogIn}>SignIn</button>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users: Object.keys(users).map((key) => users[key])
    }
}

export default connect(mapStateToProps)(LogIn)