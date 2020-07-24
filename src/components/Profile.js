import React from 'react'
import { Media, Spinner } from 'react-bootstrap'
import Tweets from './Tweets'
import '../styles/search.scss'

// @flow
export default ({ userDetails, tweets, tweetsFetched }) => {
  return (
    <div>
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={userDetails.profile_image_url}
          alt={userDetails.name}
        />
        <Media.Body>
          <h5>{userDetails.name}</h5>
          <p>
            {userDetails.description}
          </p>
          <h5>Tweets</h5>
          <div>
            {!tweetsFetched && <Spinner animation="border" variant="primary" />}
            {tweetsFetched && <Tweets className="profile-tweets" tweets={tweets} />}
          </div>
        </Media.Body>
      </Media>
    </div>
  )
}