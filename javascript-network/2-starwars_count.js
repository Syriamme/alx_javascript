#!/usr/bin/node
// Script printing the number of movies with character ID 18

#!/usr/bin/node
const request = require('request');

request(process.argv[2], (error, response, body) => {
  if (!error) {
    try {
      const films = JSON.parse(body).results;
      const characterId = 18;

      const moviesWithWedgeAntilles = films.filter((film) =>
        film.characters.some((character) => character.endsWith(`/${characterId}/`))
      );

      console.log(`Number of movies with Wedge Antilles: ${moviesWithWedgeAntilles.length}`);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  }
});
