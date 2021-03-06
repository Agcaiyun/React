import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

export default function NavLinkView() {
    return (
        <Router>
            <ul>
                <li>
                    <NavLink
                        to='/hello'
                        activeStyle={{
                            color: 'green'
                        }}
                        isActive={(match, location) => {
                            console.log(match)
                            console.log(location)
                            return true
                        }}
                    >
                        Hello
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/world'
                        activeStyle={{
                            color: '#ccc'
                        }}
                    >
                        World
                        </NavLink>
                </li>
            </ul>
        </Router>
    )
}