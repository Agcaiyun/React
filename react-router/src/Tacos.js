import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div>
                <Route path='/tacos' component={Tacos} />
            </div>
        </Router>
    );
}

const Tacos = ({ match, location, history }) => {
    console.log(match)
    console.log(location)
    console.log(history)

    return (
        <div>
            <Route path={match.url + '/carnitas'} component={Carnitas} />
        </div>
    )
}

const Carnitas = () => (
    <div>
        <h2>
            Carnitas
        </h2>
    </div>
)