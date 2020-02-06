/* eslint-disable no-undef */
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

require('dotenv').config();


reviewsPort = process.env.PORT_REVIEWS || 3001;
detailsPort = process.env.PORT_DETAILS || 3002;
imagesPort = process.env.PORT_IMAGES || 3003;
itemsPort = process.env.PORT_ITEMS || 3004;

app.use(express.static('./public'));

app.get('/details/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://localhost:${detailsPort}/details/${id}`)
    .then((data) => {
      res.status(200).json(data.data);
    });
});

app.get('/items/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://localhost:${itemsPort}/items/${id}`)
    .then((data) => {
      res.status(200).json(data.data);
    });
});

app.get('/reviews/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://localhost:${reviewsPort}/reviews/${id}`)
    .then((data) => {
      res.status(200).json(data.data);
    })
})


app.listen(port, () => console.log(`listening on port ${port}`));

