import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
	let store = createStore(
		reducer,
		initialState,
		compose(
			applyMiddleware(sagaMiddleware)
		)
	);

	sagaMiddleware.run(rootSaga);

	return store;
}