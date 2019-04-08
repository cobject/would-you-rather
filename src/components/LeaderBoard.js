import React, { Component} from 'react'
import { connect } from 'react-redux'
import User from './User'

class LeaderBoard extends Component {
    render() {
        return (
            <div>
                {this.props.users.map( (user) => (
                    <User key={user.id} id={user.id}/>
                ))}
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users: Object.keys(users)
            .map( (key) => (users[key]))
            .sort((a, b) => {
                const scoreA = Object.keys(a.answers).length + a.questions.length
                const scoreB = Object.keys(b.answers).length + b.questions.length
                return scoreB - scoreA
            })
    }
}

export default connect(mapStateToProps)(LeaderBoard)
