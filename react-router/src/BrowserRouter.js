import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

export default function BrowserRouterComponent() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

function App() {
    return (
        <h1>
            Hello React BrowserRouter
        </h1>
    )
}