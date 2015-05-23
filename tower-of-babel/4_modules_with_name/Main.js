var argv1 = process.argv[2];
var argv2 = process.argv[3];

import {PI} from './Math';
import {sqrt} from './Math';
import {square} from './Math';

console.log(PI);
console.log(sqrt(+argv1));
console.log(square(+argv2));

