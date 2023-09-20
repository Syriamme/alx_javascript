#!/usr/bin/node
//a script that prints the title of a Star Wars movie where the episode number matches a given integer

const request = require('request');

const mvId = process.argv[2];

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${mvId}`;

if (!mvId) {
  console.error('Provide a valid movie ID');
  process.exit(1);
}

request(apiUrl, (error, response, body) => {
  if (error) 
  {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error(`HTTP Status Code: ${response.statusCode}`);
  } else 
  {
    try {
      const movie = JSON.parse(body);
      console.log(movie.title);
    } catch (parseError) {
      console.error('Error parsing response:', parseError);
    }
  }
});
