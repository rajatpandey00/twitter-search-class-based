const twit = require('twit');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

const twitter = new twit({
  consumer_key: 'Lqz9zckidDHFJM9gbVjMoyF3Y',
  consumer_secret: '7xWpp6FJ9CA50QfFdVmFrozI1mitTTBjF5NmQGlGzSoR6ud8Qj',
  access_token: '144202568-IJKneWFWdsBM221ce3LOwHyWySbDcR0dWp3vYXwH',
  access_token_secret: 'h9TeghL01ni5gQpv27NZiB3qa7Cf0QMGwCWfeninQFmOx',
  strictSSL: true,
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/getUserProfiles/:searchTerm', (req, res) => {
  const searchTerm = req.params.searchTerm;
  twitter.get('users/search', { q: searchTerm }, (error, data, response) => {
    //Creating separate event Service
    const event = {
      type: 'PROFILE_SEARCHED',
      body: { searched_term: searchTerm },
    };
    axios.post('http://localhost:4000/events', event);

    res.status(200).send(JSON.stringify(data));
  });
});

app.get('/getUserTweets/:screeName', (req, res) => {
  const screeName = req.params.screeName;
  twitter.get(
    'statuses/user_timeline',
    { screen_name: screeName, count: 5 },
    (error, data, response) => {
      //Creating separate event Service for TWEETS
      const event = {
        type: 'TWEETS_SEARCHED',
        body: { screen_name: screeName },
      };
      axios.post('http://localhost:4000/events', event);

      res.status(200).send(JSON.stringify(data));
    }
  );
});
app.listen(3000, () => {
  console.log('Server is up for twitter at 3000');
});
