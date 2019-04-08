import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn, logOut } from '../actions/authedUser'

class LogIn extends Component {
    handleLogIn = (e) => {
        e.preventDefault()
        this.props.dispatch(logIn('sarahedo'))
    }

    // handleLogOut = (e) => {
    //     e.preventDefault()
    //     this.props.dispatch(logOut())
    // }

    render() {
        console.log(this.props.users)
        return (
            <div>
                <h1>Welcome to the would you rather app</h1>
                <div>
                    <h3>sign in</h3>
                    <ul>
                        {Object.keys(this.props.users).map((key, idx) => (
                            <li key={key}>{this.props.users[key].name}</li>
                        ))}
                    </ul>
                    <button
                        onClick={this.handleLogIn}
                        >
                            SignIn
                    </button>
                    {/* <button
                        onClick={this.handleLogOut}
                        >
                            SignOut
                    </button> */}
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users
    }
}

export default connect(mapStateToProps)(LogIn)