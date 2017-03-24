import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import createLogger from 'redux-logger';

import rootSaga from '../sagas';
import reducer from '../reducers';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
	let store = createStore(
		reducer,
		initialState,
		composeEnhancers(
			applyMiddleware(sagaMiddleware, logger)
		)
	);

	sagaMiddleware.run(rootSaga);

	return store;
}