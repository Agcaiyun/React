import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Basename() {
    return (
        <Router
            basename='home'
        >
            <ul>
                <li>
                    <Link to='first'>First</Link>
                </li>
                <li>
                    <Link to='second'>Second</Link>
                </li>

            </ul>
        </Router >
    )
}