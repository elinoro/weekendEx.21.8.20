//Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

'use strict';

const str = "Hi";
const num = 5;
const repeat_str = (str1, num1) =>  str1.repeat(num1);

console.log(repeat_str(str, num));