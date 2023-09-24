#!usr/bin/node
//Creating and returning a function as the result of another function

function welcomeMessage(fullName) {
    return function() {
        alert('Welcome ' + fullName);
    };
}

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');
