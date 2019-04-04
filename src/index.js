import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as API from './utils/API' // XXX

ReactDOM.render(<App />, document.getElementById('root'));

// XXX
API._getQuestions()
    .then((questions) => console.log(questions))
API._getUsers()
    .then((users) => console.log(users))
