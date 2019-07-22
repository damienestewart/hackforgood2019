// tslint:disable:no-var-requires
import { shallow } from 'enzyme';
import * as React from 'react';
// import Home from "./Home";

const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
enzyme.configure({ adapter: new Adapter() });

xdescribe('Shallow rendering of Home component', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <div />
    );
  });

  it('Render Home component that connected to Redux store', () => {
    // expect(wrapper.find(Home).length).toEqual(1);
  });
});