import React from 'react';
import { shallow } from 'enzyme';
// Material-UI
import TextField from '@material-ui/core/TextField';

import Layout from './Layout';

describe('Layout component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render title correctly', () => {
    const h1 = wrapper.find('h1');

    expect(h1.exists()).toBe(true);
    expect(h1.text()).toEqual('Find movies');
  });

  it('should render <TextField /> with expected props', () => {
    // Exists?
    expect(wrapper.find(TextField)).toHaveLength(1);
    // Important Props OK
    let textFieldProps = wrapper.find(TextField).props();
    expect(textFieldProps.value).toBe('');
    expect(textFieldProps.onChange).toBeInstanceOf(Function);
  });
});
