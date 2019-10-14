import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeButton from './HomeButton'

ReactDOM.render(
    <Router>
        <HomeButton />
    </Router>,
    document.getElementById('root')
);