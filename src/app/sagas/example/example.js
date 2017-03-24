import { take, put, select } from 'redux-saga/effects'

import type from 'action/types';

export function* doExample(payload) {
	try {
		yield put({type: 'DO_EXAMPLE_REQUEST'});
		yield put({type: 'DO_EXAMPLE_COMPLETE', payload: 'doExampleComplete'});
	} catch (error) {
		yield put({type: 'DO_EXAMPLE_ERROR'});
	}
}

export function* exampleSaga() {
	while (true) {
		const action = yield take(type.EXAMPLE_ACTION_TYPE);
		yield doExample(action.payload);
	}
}