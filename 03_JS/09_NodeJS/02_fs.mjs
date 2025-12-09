import { readFile } from 'node:fs';


console.log('BEGIN');
readFile('../frontEndLearning/resource/sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
console.log('END');