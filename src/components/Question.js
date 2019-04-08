import React, { Component} from 'react'
import { connect } from 'react-redux'

class Question extends Component {
    render() {
        return (
            <div>
                Question
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

export default connect(mapStateToProps)(Question)
