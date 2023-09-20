#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node starwars_count.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
    process.exit(1);
  }

  const filmsData = JSON.parse(body).results;
  const characterUrl = 'https://swapi-api.alx-tools.com/api/people/18/';

  const numberOfMoviesWithWedge = filmsData.reduce((count, movie) => {
    const hasWedge = movie.characters.some((character) => character === characterUrl);
    return hasWedge ? count + 1 : count;
  }, 0);

  console.log(numberOfMoviesWithWedge);
});
