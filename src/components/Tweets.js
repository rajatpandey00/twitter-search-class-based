import React from 'react'
import Tweet from './Tweet';

import '../styles/search.scss';

// @flow
export default ({ tweets }) => {
    return (
        <div>
            {tweets.length > 0 && tweets.map((tweet, index) => <Tweet tweet={tweet} tkey={index} key={index} />)}
        </div>
    )
}