#!/usr/bin/node
// Script displaying status code of a GET Request


const url = process.argv[2];
const request = require('request');

request.get(url, (error, response) => {
  if (error) 
  {
    console.log(error);
  } 
  else 
  {
    console.log('code: ' + response.statusCode);
  }
});
