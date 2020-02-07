/* eslint-disable no-undef */
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

require('dotenv').config();


reviewsPort = process.env.PORT_REVIEWS || 3001;
detailsPort = process.env.PORT_DETAILS || 3002;
carouselPort = process.env.PORT_CAROUSEL || 3003;
itemsPort = process.env.PORT_ITEMS || 3004;

app.use(express.static('./public'));

app.get('/details/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://ec2-18-220-152-98.us-east-2.compute.amazonaws.com/details/${id}`)
    .then((data) => {
      res.status(200).json(data.data);
    });
});

app.get('/additional/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://ec2-3-133-117-113.us-east-2.compute.amazonaws.com/additional/${id}`)
    .then((data) => {
      res.status(200).json(data.data);
    });
});

app.get('/reviews/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://ec2-3-14-246-138.us-east-2.compute.amazonaws.com/reviews/${id}`)
    .then((data) => {
      res.status(200).json(data.data);
    })
})

app.get('/carousel/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://localhost:${carouselPort}/carousel/${id}`)
    .then((data) => {
      res.status(200).json(data.data);
    })
    .catch((err) => {
      console.log(err);
    })
})


app.listen(port, () => console.log(`listening on port ${port}`));

