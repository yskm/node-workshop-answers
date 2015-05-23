var argv1 = process.argv[2];
var argv2 = process.argv[3];

import Math from './Math';

console.log(Math.PI);
console.log(Math.sqrt(+argv1));
console.log(Math.square(+argv2));

