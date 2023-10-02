import { take } from './take';
import { flatten } from './flatten';
import { clone } from './clone';
import { invert } from './invert';


const arr = [1, 2, 3];
const taken = take(arr, 2);
console.log(taken);

const nestedArr = [[1], 2, [3, [4]]];
const flattenedArr = flatten(nestedArr);
console.log(flattenedArr);

const originalObj = { a: { b: { c: 3 } } };
const copiedObj = clone(originalObj);
console.log(originalObj === copiedObj);

const originalMapping = { 1: 'a', 2: 'b' };
const invertedMapping = invert(originalMapping); 
console.log(invertedMapping);
