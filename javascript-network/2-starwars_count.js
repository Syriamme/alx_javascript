#!/usr/bin/node
//a script that prints the number of movies where the character “Wedge Antilles” is present.

const request = require('request');

const apiUrl = process.argv[2];

const characterId = 18;

if (!apiUrl) {
  console.error('Please provide the Star Wars API URL as an argument.');
  process.exit(1);
}

request(apiUrl, (error, response, body) => {
  if (error)
  {
    console.error('Error:', error);
  } 
  
  else if (response.statusCode !== 200) 
  {
    console.error(`HTTP Status Code: + response.statusCode`);
  } 
  
  else 
  {
    try {
      const films = JSON.parse(body).results;
      const moviesWithWedgeAntilles = films.filter((film) => {
        return film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
      });

      console.log(`Number of movies with Wedge Antilles: ${moviesWithWedgeAntilles.length}`);
    } 
    catch (parseError) 
    {
      console.error('Error parsing response:', parseError);
    }
  }
});
