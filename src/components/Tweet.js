import React from 'react'
import Card from 'react-bootstrap/Card'

export default ({ tweet, tkey }) => {
    return(
    <Card className="tweet" key={tkey}>
        <img
            width={32}
            height={32}
            className="mr-3"
            src={tweet?.user?.profile_image_url || tweet?.user?.profile_image_url_https}
        />
        <Card.Body key={tkey}>
            <Card.Text key={tkey}>
                {tweet?.text}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <span key={tkey} style={{float: "right"}}>Retweeted Count - {tweet?.retweet_count}</span>
        </Card.Footer>
    </Card>)
}