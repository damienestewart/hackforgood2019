// tslint:disable:no-var-requires
import { shallow } from 'enzyme';
import * as React from 'react';
import App from './App';

let enzyme;
let Adapter;

describe('Shallow render of App component', () => {
  let wrapper: any;

  beforeAll(() => {
    enzyme = require('enzyme');
    Adapter = require('enzyme-adapter-react-16');

    enzyme.configure({ adapter: new Adapter() });
  });

  beforeEach(() => {
    wrapper = shallow(
      <div>
        <App />
      </div>
    );
  });

  it('Render App component', () => {
    expect(wrapper.find(App).length).toEqual(1);
  });
});
