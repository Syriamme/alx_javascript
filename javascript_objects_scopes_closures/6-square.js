#!/usr/bin/node
//a class Square that defines a square and inherits from Square of 5-square.js

const Sq = require('./5-square');

class Square extends Sq {
  charPrint (c) {
    if (c === undefined) {
      this.print();
    } else {
      for (let i = 0; i < this.height; i++) {
        console.log(c.repeat(this.width));
      }
    }
  }
}

module.exports = Square;