import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/profile">
					<Profile />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}
export default Routes;