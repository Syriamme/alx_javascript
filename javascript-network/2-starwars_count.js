#!/usr/bin/node
// Script printing the number of movies with character ID 18

const request = require('request');

async function countMoviesWithWedgeAntilles(apiUrl) {
  try {
    const response = await new Promise((resolve, reject) => {
      request(apiUrl, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });

    if (response.statusCode === 200) {
      const data = JSON.parse(response.body);
      const films = data.results;
      const characterId = 18;
      let count = 0;

      for (const movie of films) {
        if (movie.characters.some((character) => character.endsWith(`/${characterId}/`))) {
          count++;
        }
      }

      console.log(`Number of movies with Wedge Antilles: ${count}`);
    } else {
      console.error(`HTTP Status Code: ${response.statusCode}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

if (process.argv.length < 3) {
  console.error('Please provide the Star Wars API URL as an argument.');
  process.exit(1);
}

const apiUrl = process.argv[2];
countMoviesWithWedgeAntilles(apiUrl);
