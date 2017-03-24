import React from 'react'
import { createMockStore } from 'redux-test-utils';
import { Provider } from 'react-redux';

import ConnectedExample, {Example} from '../Example'

describe('Example Component', () => {
	const fakeStore = {
		name: 'fake name'
	};
	const store = createMockStore({
		example: {
			toJS: () => {
				return fakeStore;
			}
		}
	});
	const props = {
		comment: 'test comment'
	};
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<Provider store={store}>
				<ConnectedExample {...props}/>
			</Provider>
		);
	});

	it('renders proper element with specific className', function () {
		expect(wrapper.find('div').first().hasClass('example')).to.eql(true);
		
	});

	it('renders proper comment', () => {
		expect(wrapper.find('.comment').text()).to.equal('test comment');
	});

	it('renders proper name', () => {
		expect(wrapper.find('.name').text()).to.equal('fake name');
	});
});