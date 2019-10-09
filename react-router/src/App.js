import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<div>
				<Navigation />

				<Switch>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/topics'>
						<Topics />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

function Navigation() {
	return (
		<ul>
			<li>
				<Link to='/about'>About</Link>
			</li>
			<li>
				<Link to='/topics'>Topics</Link>
			</li>
			<li>
				<Link to='/'>Home</Link>
			</li>
		</ul>
	)
}

function Topics() {
	return (
		<div>
			<h2>Topics</h2>

			<ul>
				<li>
					<Link to={`/topics/components`}>Components</Link>
				</li>
				<li>
					<Link to={`/topics/props-v-state`}>Props v. State</Link>
				</li>
			</ul>

			<Switch>
				<Route path={`/topics/components`}>
					<Topic />
				</Route>
				<Route path={`/topics/props-v-state`}>
					<h3>Please select a topic.</h3>
				</Route>
			</Switch>
		</div>
	)
}

function Topic() {
	return (
		<h3>Requested topic ID</h3>
	)
}

function Home() {
	return <h2>Home</h2>
}

function About() {
	return <h2>About</h2>
}


