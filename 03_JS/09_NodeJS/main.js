'use strict';
const moduleA = require('./name');

moduleA.greet('Alice');
moduleA.greet('Bob');
moduleA.greet('Charlie');
console.log('Goodbye, Node.js!', moduleA.s);