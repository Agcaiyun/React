import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

export default function RouterTest() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to='/first'>First</Link>
                </li>
                <li>
                    <Link to='/second'>Second</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/first'>
                    <First />
                </Route>
                <Route path='/second'>
                    <Second />
                </Route>

            </Switch>
        </Router>
    )
}

function First() {
    return (
        <h2>
            First
        </h2>
    )
}

function Second() {
    return (
        <h2>
            Second
        </h2>
    )
}

function Home() {
    return (
        <h2>
            Home
        </h2>
    )
}