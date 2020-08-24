// Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

'use strict';

const str = 'Hey there and good morning to you';

const shortestWord = (str1) => Math.min(...str1.split(' ').map(str2 => str2.length));
console.log(shortestWord(str));