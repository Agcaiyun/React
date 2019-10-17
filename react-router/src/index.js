import React from 'react';
import ReactDOM, { Prompt } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeButton from './HomeButton';
import ForceRefresh from './ForceRefresh'

ReactDOM.render(
    <ForceRefresh />,
    document.getElementById('root')
);