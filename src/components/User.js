import React, { Component} from 'react'
import { connect } from 'react-redux'

class User extends Component {
    render() {
        const { id, users, answered, created } = this.props
        const score = answered + created
        return (
            <div className='center user' width='50%'>
                <img
                    src={users[id].avatarURL}
                    alt={`Avatar of ${users[id].name}`}
                    className='avatar'
                />
                <div className='user-info'>
                    <h1>{users[id].name}</h1>
                    <div>Answered question: {answered}</div>
                    <div>Created question: {created}</div>
                    <div>score: {score}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}, {id}) {
    return {
        users,
        answered: Object.keys(users[id].answers).length,
        created: users[id].questions.length
    }
}

export default connect(mapStateToProps)(User)
