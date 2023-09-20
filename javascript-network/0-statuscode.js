#!/usr/bin/node
// a script that display the status code of a GET request


const req = require('request');

const url = process.argv[2];

request.get(url, (error, respone) => {
    if (error) {
        console.log (error);
        process.exit(1);
    }
    else
    console.log('code: + response.statusCode')
});
