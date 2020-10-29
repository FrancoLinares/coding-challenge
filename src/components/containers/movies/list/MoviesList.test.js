import React from 'react';
import { shallow } from 'enzyme';

import MoviesList from './MoviesList';
import MediaCard from '../card/CardMovie';

describe('MoviesList component', () => {
  let wrapper;

  beforeEach(() => {
    let movies = {
      Action: [{ id: 1, genre_ids: [1, 2, 3], original_title: 'Murphy' }],
      Comedy: [{ id: 2, genre_ids: [1, 3], original_title: 'Pepe' }],
    };
    wrapper = shallow(<MoviesList movies={movies} />);
  });

  it('render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('render without data', () => {
    const wrapperWithOutData = shallow(<MoviesList />);
    const h2 = wrapperWithOutData.find('h2');
    expect(h2.exists()).toBe(false);
  });

  it('redering data correctly', () => {
    const text = wrapper.text();

    expect(text.includes('Action'));
    expect(text.includes('Comedy'));
  });

  it('should render <MediaCard />', () => {
    expect(wrapper.find(MediaCard)).toHaveLength(2);
  });
});
