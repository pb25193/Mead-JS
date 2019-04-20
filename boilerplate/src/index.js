// import './utilities.js';

import square, { add, name } from './utilities';
import otherScream from './scream';

console.log('index.js');

console.log(add(32,1));

console.log(`imported name was ${otherScream(name)}`);

console.log(square(341));