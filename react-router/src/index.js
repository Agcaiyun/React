import React from 'react';
import ReactDOM, { Prompt } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeButton from './HomeButton';
import ForceRefresh from './ForceRefresh';
import NavLinkView from './NavLink';

ReactDOM.render(
    <NavLinkView />,
    document.getElementById('root')
);