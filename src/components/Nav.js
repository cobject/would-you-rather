import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { logOut } from '../actions/authedUser'

class Nav extends Component {
    handleLogOut = (e) => {
        e.preventDefault()
        this.props.dispatch(logOut())
    }

    render() {
        console.log('nav', this.props.user)
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/new' exact activeClassName='active'>New Question</NavLink>
                    </li>
                    <li>
                        <NavLink to='/ranking' exact activeClassName='active'>Leader board</NavLink>
                    </li>
                    {this.props.user ? <li>hello, {this.props.user.name}</li> : null}
                    {this.props.user ? <li>avatar</li> : null}
                    {this.props.user ? <li><button onClick={this.handleLogOut}>Logout</button></li> : null }
                </ul>
            </nav>
        )
    }
}

export default Nav