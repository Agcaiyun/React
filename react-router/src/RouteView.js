import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function RouteView() {
    return (
        <Router>
            <Switch
            // location={{
            //     pathname: '/document'
            // }}
            >
                <Route
                    location={{
                        pathname: '/home/user'
                    }}
                    path={["/home/user", "/home/blog", "/home/about"]}
                    render={() => <div>Home/user  or Home/blog  or  Home/about</div>}
                />
                {/* location.pathname = ‘/document/all’ 时，界面将展示 path='/document' path='/document/all' 两个路径 */}
                <Route
                    path={'/document'}
                    render={() => <h2>Document</h2>}
                />
                <Route
                    path={'/document/all'}
                    render={() => <h2>Document All</h2>}
                />
                {/* path={'/:user'} 为动态路由，location.pathname = ‘/about’ 时，About User NoMatch 都将显示 */}
                <Route path={'/about'}>
                    <h2>About</h2>
                </Route>
                {/* <Route path={'/:user'}>
                    <h2>User</h2>
                </Route> */}
                {/* <Route>
                    <h2>NoMatch</h2>
                </Route> */}

                {/* match 实用方法 */}
                <Route
                    path="/user/:username"
                    children={({ match }) => (<User match={match} a={'a'} />)}
                >
                </Route>
            </Switch>
        </Router>
    )
}

function User(props) {
    return (
        <>
            <h1>Hello {props.match.params.username} </h1>
            <h1>Hello {`${props.match.isExact}`} </h1>
            <h1>Hello {props.match.path} </h1>
            <h1>Hello {props.match.url} </h1>

        </>
    );
}