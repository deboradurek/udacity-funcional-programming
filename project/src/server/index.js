require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const path = require('path');
const Immutable = require('immutable');

const logError = (message) => console.log('\x1b[41m%s\x1b[0m', `Error: ${message}`);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../public')));

const request = async (path, params) => {
  if (!process.env.API_KEY) {
    throw new Error(
      'API_KEY is missing, please, create a .env file and place your generate key there'
    );
  }

  const urlParams = new URLSearchParams({
    api_key: process.env.API_KEY,
    ...params,
  });
  return fetch(`https://api.nasa.gov/${path}?${urlParams}`).then((res) => res.json());
};

const getRovers = () => request(`mars-photos/api/v1/rovers`);

const getRoverInfo = (roverName, date) =>
  request(`mars-photos/api/v1/rovers/${roverName.toLowerCase()}/photos`, {
    earth_date: date,
  });

// your API calls
app.get('/rovers', async (_req, res) => {
  try {
    const { rovers } = await getRovers();
    const photos = (
      await Promise.all(rovers.map((rouver) => getRoverInfo(rouver.name, rouver.max_date)))
    ).map((result) => ({
      photos: result.photos.map((photo) => photo.img_src),
    }));

    const result = Immutable.List(rovers)
      .zipWith((a, b) => {
        return { ...a, ...b };
      }, photos)
      .toJS();

    res.send(result);
  } catch (err) {
    logError(err.message);
  }
});

// example API call
app.get('/apod', async (_req, res) => {
  try {
    const image = await request('planetary/apod');
    res.send({ image });
  } catch (err) {
    logError(err.message);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
