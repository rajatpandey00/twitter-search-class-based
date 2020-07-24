import React from 'react';
import { Card, Button } from 'react-bootstrap';

// @flow
const UserCard = (props) => {
    const followers = (props.followers_count > 100 ) ? props.followers_count / 1000 + 'K ': props.followers_count + " ";
    return (
        <Card border="primary" style={{ margin: "10px", backgroundColor: "ivory" }}>
            <Card.Header>Name - {props.name}</Card.Header>
            <Card.Body>
                <img
                    width={32}
                    height={32}
                    className="mr-3"
                    src={props.profile_image_url}
                />
                {props.name}
                <Card.Text>
                    {props.screen_name}
                </Card.Text>
                <div style={{ float: "right" }}>{followers }<b>Followers</b></div>
            </Card.Body>
            <Card.Footer>
                <Button onClick={() => props.viewProfile(props)} style={{ float: "right" }}>
                    View Full Profile
                 </Button>
            </Card.Footer>
        </Card>
    )
}
export default UserCard;