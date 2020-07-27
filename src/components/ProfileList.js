import React, { useState, useEffect, useReducer } from 'react';
import UserCard from '../components/UserCard';
import Profile from '../components/Profile';
import axios from 'axios';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import '../styles/profile.scss';

const initialData = {
  tweets: [],
  tweetsFetched: false,
};

export const reducer = (state, action) => {
  if (action.type === 'FETCH_TWEETS_SUCCESS') {
    return Object.assign({}, state, {
      ...state,
      tweets: action.data,
      tweetsFetched: true,
    });
  } else if (action.type === 'FETCH_TWEETS_FAILED') return state;

  throw new Error();
};

// Hooks based approach
// @flow
export default ({
  profiles,
  viewProfile,
  showProfile,
  userDetails,
  showSpinner,
}) => {
  const [tweetsFetched, setTweetsFetched] = useState(false);
  const [data, dispatch] = useReducer(reducer, initialData);
  const [tweets, setTweets] = useState([]);

  const fetchTweets = (screeName) => {
    axios
      .get(`http://localhost:3000/getUserTweets/${screeName}`)
      .then(({ data }) => {
        dispatch({
          type: 'FETCH_TWEETS_SUCCESS',
          tweets: setTweets(data),
          tweetsFetched: setTweetsFetched(true),
        });
      })
      .catch(() => {
        dispatch({ type: 'FETCH_TWEETS_FAILED', tweets: [] });
      });
  };

  useEffect(() => {
    showProfile && fetchTweets(userDetails.screen_name); // Mount Behavior
    return () => {
      // UnMount Behavior
      setTweets([]);
      setTweetsFetched(false);
    };
  }, [showProfile, userDetails.screen_name]); // Array List on which Mounting will do useEfffect

  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={4} className="list-profile">
            <b>Please scroll down for more profiles</b>
            <br />
            {!showSpinner && (
              <Spinner
                style={{ alignSelf: 'center' }}
                animation="border"
                variant="primary"
              />
            )}
            {profiles.length > 0 &&
              profiles.map((user, index) => (
                <UserCard {...user} key={index} viewProfile={viewProfile} />
              ))}
          </Col>
          <Col className="profile">
            {showProfile && (
              <Profile
                userDetails={userDetails}
                tweets={tweets}
                tweetsFetched={tweetsFetched}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
