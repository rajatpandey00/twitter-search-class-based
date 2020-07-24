import React from 'react';
import renderer from 'react-test-renderer';

import SearchBox from '../SearchBox';

describe('SearchBox test', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<SearchBox />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});