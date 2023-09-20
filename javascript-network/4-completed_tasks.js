#!/usr/bin/node


const request = require('request');

if (process.argv.length < 3) {
  console.log('Please provide the API URL as an argument.');
  process.exit(1);
}

request(process.argv[2], function (error, response, body) {
  if (error) {
    console.log(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.log(response.statusCode);
    return;
  }

  const todos = JSON.parse(body);
  const completed = {};


  todos.forEach((todo) => {
    if (todo.completed) {
      if (!completed[todo.userId]) {
        completed[todo.userId] = 1;
      } else {
        completed[todo.userId]++;
      }
    }
  });

  for (const userId in completed) {
    console.log(`User ID ${userId}: ${completed[userId]} completed tasks`);
  }
});