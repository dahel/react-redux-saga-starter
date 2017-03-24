import { expect } from 'chai'

import exampleReducer from './example';

describe('Example Reducer', () => {
    it('properly handles UPDATE_EXAMPLE action', () => {
        const action = {
        	type: 'UPDATE_EXAMPLE'
		};

		expect(exampleReducer(undefined, action).toJS()).to.deep.equal({
			name: 'example store updated'
		})
    });
});