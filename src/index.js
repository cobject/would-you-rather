import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reducers from './reducers'
import middlewares from './middlewares'
import { createStore } from 'redux'
// import * as API from './utils/API' // XXX

const store = createStore(reducers, middlewares)
ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);

// XXX
// API._getQuestions()
//     .then((questions) => console.log(questions))
// API._getUsers()
//     .then((users) => console.log(users))
