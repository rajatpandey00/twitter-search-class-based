import React from 'react';
import renderer from 'react-test-renderer';
 
import Profile from '../Profile';
 
describe('Profile', () => {
    const mockUser = { profile_image_url : 'blabl blah', tweets:[{ text: 'test tweet'}] }
  test('snapshot renders', () => {
    const component = renderer.create(<Profile userDetails={mockUser}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});