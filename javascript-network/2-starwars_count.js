#!/usr/bin/node
// Script printing the number of movies with character ID 18

const request = require('request');
const apiUrl = process.argv[2];
const characterUrl = 'https://swapi-api.alx-tools.com/api/people/18/';

request(apiUrl, (error, response, body) => {
  if (error) {
    console.log (error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
    process.exit(1);
  }
  const filmsData = JSON.parse(body).results;
  const mvWithWedge = filmsData.reduce((count, movie) => {
    const withWedge = movie.characters.some((character) => character === characterUrl);
    return withWedge ? count + 1 : count;
  }, 0);

  console.log(mvWithWedge);
});
