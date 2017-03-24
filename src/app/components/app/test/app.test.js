import React from 'react';

import App from '../App';

describe('(Component) App', () => {
	it('renders root div with proper className', () => {
		const wrapper = shallow(<App />);

		expect(wrapper.type()).to.equal('div');
		expect(wrapper.hasClass('app')).to.equal(true);
	});

	it('calls componentDidMount', () => {
		sinon.spy(App.prototype, 'componentDidMount');

		mount(<App />);

		expect(App.prototype.componentDidMount.calledOnce).to.equal(true);

		App.prototype.componentDidMount.restore();
	});
});