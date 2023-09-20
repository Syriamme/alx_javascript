#!/usr/bin/node
// A script that prints the number of movies where the character “Wedge Antilles” is present.

const request = require('request');

const apiUrl = 'https://swapi-api.alx-tools.com/api/films/'; // Correct API URL

const characterId = 18;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error(`HTTP Status Code: ${response.statusCode}`);
  } else {
    try {
      const films = JSON.parse(body).results;
      let moviesWithWedgeAntilles = [];

      for (const film of films) {
        if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
          moviesWithWedgeAntilles.push(film);
        }
      }

      console.log(`Number of movies with Wedge Antilles: ${moviesWithWedgeAntilles.length}`);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  }
});
