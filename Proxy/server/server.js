const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('./public'));

app.get('/details/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://localhost:3002/details/${id}`)
    .then((data) => {
      res.status(200).json(data.data);
    });
});

app.get('/items/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://localhost:3004/items/${id}`)
    .then((data) => {
      res.status(200).json(data.data);
    });
});

app.get('/reviews/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://localhost:3001/reviews/${id}`)
    .then((data) => {
      res.status(200).json(data.data);
    })
})


app.listen(port, () => console.log(`listening on port ${port}`));

