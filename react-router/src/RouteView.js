import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function RouteView() {
    return (
        <Router>
            <Route
                path={["/home/user", "/home/blog", "/home/about"]}
                render={() => <div>Home/user  or Home/blog  or  Home/about</div>}
            />
        </Router>
    )
}