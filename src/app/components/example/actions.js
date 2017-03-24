import type from 'action/types';
import createAction from 'action/create';

export function exampleAction() {
	return createAction(type.EXAMPLE_ACTION_TYPE);
}