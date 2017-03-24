import { Map } from 'immutable';

const init = Map({
	name: 'example store'
});


export default function example(store=init, action) {
	switch (action.type) {
		case 'UPDATE_EXAMPLE':
				return store.set('name', 'example store updated');
		default:
			return store;
	}
}