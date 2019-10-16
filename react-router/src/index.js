import React from 'react';
import ReactDOM, { Prompt } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeButton from './HomeButton';
import GetUserConfirmation from './GetUserConfirmation'

ReactDOM.render(
    <Router getUserConfirmation={(message, callback) => {

        alert(message)
        callback(true)
    }}>
        <GetUserConfirmation />
    </Router>,
    document.getElementById('root')
);