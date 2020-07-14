
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const filter = require('lodash/filter');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = [{
    id: 'rajatpandey00',
    name: 'Rajat-Pandey',
    stars: 5
},
{
    id: 'user107',
    name: 'User-107',
    stars: 2
},
{
    id: 'user108',
    name: 'User-108',
    stars: 5
},
{
    id: 'user105',
    name: 'User-105',
    stars: 0
}];

app.get('/gitUsers/:query', (req, res) => {
   const query = req.params.query;
   const filteredData = filter(users, user => user.name.toLowerCase().includes(query.toLowerCase()));
  res.status(200).send(filteredData);
})

app.get('/gitUsers/', (req, res) => {
   res.status(200).send(JSON.stringify(users));
 })


app.listen('4000', () => {
    console.log('Listening on Port 4000');
})