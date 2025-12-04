'use strict';
console.log('Hello, Node.js!');

const s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

module.exports = greet;