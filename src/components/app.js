import { h } from 'preact';
import Router from 'preact-router';

import Home from '../routes/home';
import Home2017 from '../routes/home-2017';

const App = () =>
	<div id="app">
		<Router>
			<Home path="/" />
			<Home2017 path="/2017" />
		</Router>
	</div>;

export default App;
