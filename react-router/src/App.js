import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Tacos from './Tacos';

export default function App() {
	return (
		<Router>
			{/* <div>
				<Route path='/tacos' component={Tacos} />
			</div> */}
			<Prompt when={true} message="Are you sure?" />
		</Router>
	);
}