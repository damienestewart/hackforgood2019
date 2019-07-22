// tslint:disable:no-var-requires
import { shallow } from 'enzyme';
import * as React from 'react';
import { Header } from './Header';

let enzyme;
let Adapter;

describe('Render Header component', () => {
  let wrapper: any;

  beforeAll(() => {
    enzyme = require('enzyme');
    Adapter = require('enzyme-adapter-react-16');

    enzyme.configure({ adapter: new Adapter() });
  });

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('Verify Header component', () => {
    const inst = wrapper.instance();
    expect(inst).toBeInstanceOf(Header);
  });
});
