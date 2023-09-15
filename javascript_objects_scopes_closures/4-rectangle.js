#!/usr/bin/node
//a class rectangle with constructor that takes 2 arguments w and h

class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
    }

    print() {
        if (this.width && this.height) {
            for (let i = 0; i < this.height; i++) {
                console.log('X'.repeat(this.width));
            }
        }
    }

    rotate() {
        if (this.width && this.height) {
            const temp = this.width;
            this.width = this.height;
            this.height = temp;
        }
    }

    double() {
        if (this.width && this.height) {
            this.width *= 2;
            this.height *= 2;
        }
    }
}

module.exports = Rectangle;
