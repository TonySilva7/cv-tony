import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

function MyRoutes() {
	return (
		<Switch>
			<Route exact path='/' component={ Home } />
			<Route exact path='/profile' component={ Profile } />
		</Switch>
	);
}
export default MyRoutes;
