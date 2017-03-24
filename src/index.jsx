import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
	Router,
	hashHistory,
	Route,
	IndexRoute,
	IndexRedirect
} from 'react-router';

import configureStore from 'store';

import App from './app/components/app/App';
import Example from './app/components/example/Example';

const store = configureStore();

require("!style!css!sass!./sass/loader.scss");

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Example}/>
				{/*<Route path="hello" component={Hello}/>*/}
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);