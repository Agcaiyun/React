import React from 'react';
import ReactDOM from 'react-dom';
import RouterTest from './RouterTest';
import BrowserRouterComponent from './BrowserRouter';
import { Route } from 'react-router-dom';
import Router from './Router'

ReactDOM.render(
    <RouterTest />,
    // <BrowserRouterComponent />,


    // <Route >
    //     <Router />
    // </Route>,
    document.getElementById('root')
);
