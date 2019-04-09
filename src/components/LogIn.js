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
        console.log(this.props.users)
        return (
            <div>
                <h1>Welcome to the would you rather app</h1>
                <div>
                    <div>
                        <h3>sign in</h3>
                        <select onChange={this.handleSelect}>
                            {this.props.users.map( (user) => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))}
                        </select>
                    </div>
                    <button onClick={this.handleLogIn}>SignIn</button>
                </div>
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