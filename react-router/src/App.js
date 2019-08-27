import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
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

function Users() {
	return (
		<h2>
			{
				'Users3333'
			}
		</h2>
	)
}

function AppRouter() {
	return (
		<Fragment>

			<Router>
				<Fragment>
					<nav>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/about/'>About</Link>
							</li>
							<li>
								<Link to='/users/'>Users</Link>
							</li>
						</ul>
					</nav>
				</Fragment>

				<Route path='/' exact component={Index} />
				<Route path='/about' component={About} />
				<Route path='/users' component={Users} />
			</Router>
		</Fragment>

	)
}

export default AppRouter;