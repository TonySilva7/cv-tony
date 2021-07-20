import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';

function MyRoutes() {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/profile' component={Profile} />
		</Switch>
	);
}
export default MyRoutes;
