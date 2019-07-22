// tslint:disable:no-var-requires
// tslint:disable:no-console
import { shallow } from 'enzyme';
import * as React from 'react';

import { Footer } from './Footer';

let enzyme;
let Adapter;

describe('Render Footer component', () => {
  let wrapper: any;

  beforeAll(() => {
    enzyme = require('enzyme');
    Adapter = require('enzyme-adapter-react-16');

    enzyme.configure({ adapter: new Adapter() });
  });

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('Verify Footer component', () => {
    const inst = wrapper.instance();
    expect(inst).toBeInstanceOf(Footer);
  });
});
