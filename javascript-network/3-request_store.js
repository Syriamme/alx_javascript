#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const filepath = process.argv[3];
const url = process.argv[2];

request(url).pipe(fs.createWriteStream(filepath));
