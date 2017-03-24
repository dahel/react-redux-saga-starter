import {
    shallow,
    mount,
    render
} from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon';


window.expect = expect;
window.shallow = shallow;
window.mount = mount;
window.render = render;
window.sinon = sinon;

var context = require.context('../src', true, /.+\.test\.js?$/);

context.keys().forEach(context);
module.exports = context;