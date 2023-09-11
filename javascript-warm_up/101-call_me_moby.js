#!/usr/bin/node
// a function that executes x times a function.

exports.callMeMoby = function (x, theFunction) {
    let i = 0;
    while (i < x) {
      theFunction();
      i++;
    }
  };
  