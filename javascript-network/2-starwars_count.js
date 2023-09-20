#!/usr/bin/node
// Script printing the number of movies with character ID 18

const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 2-starwars_count.js <API_URL>');
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

  const filmsData = JSON.parse(body);

  const filmsWithWedge = filmsData.results.filter((film) =>
    film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
  );

  console.log(filmsWithWedge.length);
});
