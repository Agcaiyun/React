import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
	return (
		<h2>
			{
				'Home'
			}
		</h2>
	)
}

function About() {
	return (
		<h2>
			{
				'About'
			}
		</h2>
	)
}

function Topic({ match }) {
	return (
		<h3>
			{
				`Requested Param: ${match.params.id}`
			}
		</h3>
	)
}

function Topics({ match }) {
	return (
		<Fragment>
			<h2>
				{
					'Topics'
				}
			</h2>

			<ul>
				<li>
					<Link to={`${match.url}/components`}>Components</Link>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
				</li>
			</ul>


		</Fragment>
	)
}

function Header() {
	return (
		<ul>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/about'>About</Link>
			</li>
			<li>
				<Link to='/topics'>Topics</Link>
			</li>
		</ul>
	)
}

function App() {
	return (
		<Router>
			<Fragment>
				<Header />

				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/topics' component={Topics} />
			</Fragment>
		</Router>
	)
}

export default AppRouter;