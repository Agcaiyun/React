import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function RouteView() {
    return (
        <Router>
            <Route
                path={["/home/user", "/home/blog", "/home/about"]}
                render={() => <div>Home/user  or Home/blog  or  Home/about</div>}
            />
            {/* location.pathname = /document/all 时，界面将展示 path='/document' path='/document/all' 两个路径 */}
            <Route
                path={'/document'}
                render={() => <h2>Document</h2>}
            />
            <Route
                path={'/document/all'}
                render={() => <h2>Document All</h2>}
            />
        </Router>
    )
}