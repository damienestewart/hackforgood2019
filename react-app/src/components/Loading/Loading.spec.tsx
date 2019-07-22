// tslint:disable:no-var-requires
// tslint:disable:no-console
import { shallow } from 'enzyme';
import * as React from 'react';
import Loading from './Loading';

let enzyme;
let Adapter;

const retryTest = () => {
  return null;
};

describe('Render Loading component', () => {
  let wrapper: any;

  beforeAll(() => {
    enzyme = require('enzyme');
    Adapter = require('enzyme-adapter-react-16');

    enzyme.configure({ adapter: new Adapter() });
  });

  beforeEach(() => {
    wrapper = shallow(<Loading isLoading={true} pastDelay={true} timedOut={true} error={true} retry={retryTest} />);
  });

  it('Verify Loading component', () => {
    const inst = wrapper.instance();
    expect(inst).toBeInstanceOf(Loading);
  });
});
