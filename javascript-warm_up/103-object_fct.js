#!/usr/bin/node
//new function incr that increments the integer value


let myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
  
  myObject.increment = () => {
    myObject.value++;
  };
  
  myObject.increment();
  console.log(myObject);

  myObject.increment();
  console.log(myObject);

  myObject.increment();
  console.log(myObject);