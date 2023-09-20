#!/usr/bin/node
// Script printing the number of movies with character ID 18


const request = require('request');

const apiUrl = process.argv[2];

const charId = 18;

if (!apiUrl) {
  console.error('Please provide the Star Wars API URL as an argument.');
  process.exit(1);
}

request.get(apiUrl, (error, response, body) => {
  if (error) 
  {
    console.error('Error:', error);
  } 
  else if (response.statusCode !== 200) 
  {
    console.error(`HTTP Status Code: ${response.statusCode}`);
  } 
  else 
  {
    try {
      const films = JSON.parse(body).results;
      let mvAntilles = [];

      for (const film of films) {
        if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${charId}/`)) {
          mvAntilles.push(film);
        }
      }

      console.log(`Number of movies with Wedge Antilles: ${mvAntilles.length}`);
    } 
    catch (parseError) 
    {
      console.error('Error parsing JSON:', parseError);
    }
  }
});
