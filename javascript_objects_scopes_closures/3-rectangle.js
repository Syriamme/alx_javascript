#!/usr/bin/node
//a class rectangle with constructor that takes 2 arguments w and h

class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 ) {
        return {};
      }
      this.width = w;
      this.height = h;
    }
  
print() {
    if (this.width && this.height) {
        for (let i = 0; i < this.height; i++) {
            console.log('X'.repeat(this.width));
        }
    }
}
}

module.exports = Rectangle;
  