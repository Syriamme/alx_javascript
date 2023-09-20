#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

const writeStream = fs.createWriteStream(filePath);

request(url)
  .on('error', (error) => {
    console.error('Error:', error);
  })

  .pipe(writeStream)
  .on('error', (error) => {
    console.error('Error writing to file:', error);
  })

  .on('finish', () => {
    console.log(`Successfully saved the content of ${url} to ${filePath}`);
  });
