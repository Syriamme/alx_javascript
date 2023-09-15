#!/usr/bin/node
//a class Square that defines a square and inherits from Square of 5-square.js

class Square {
    constructor(size) {
        this.size = size;
    }

    charPrint(c) {
        if (c === undefined) {
            c = 'X';
        }

        for (let i = 0; i < this.size; i++) {
            console.log(c.repeat(this.size));
        }
    }
}

class InheritedSquare extends Square {
    constructor(size) {
        super(size);
    }
}

module.exports = InheritedSquare;
