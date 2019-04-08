import React, { Component} from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
    render() {
        return (
            <div>
                LeaderBoard
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}) {
    return {
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard)
