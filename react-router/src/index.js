import React from 'react';
import ReactDOM, { Prompt } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeButton from './HomeButton';
import ForceRefresh from './ForceRefresh';
import NavLinkView from './NavLink';
import RouteView from './RouteView';
import CookieFun from './Cookie';

ReactDOM.render(
    <CookieFun />,
    document.getElementById('root')
);