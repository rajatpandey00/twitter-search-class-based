import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Tweets from '../Tweets';
import Tweet from '../Tweet'

let mockTweets;
describe('Tweets test', () => {
  mockTweets = [{ text: 'test tweet', retweet_count: 9 }]
  test('snapshot renders', () => {
    const component = renderer.create(<Tweets tweets={mockTweets} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Tweets test', () => {
  mockTweets = [{ text: 'test tweet', retweet_count: 9 }, { text: 'test tweet2', retweet_count: 19 }]
  const wrapper = shallow(<Tweets tweets={mockTweets} />);
  it.only('should render separate div', () => {
    expect(wrapper.find(Tweet).length).toEqual(mockTweets.length);
  });
});