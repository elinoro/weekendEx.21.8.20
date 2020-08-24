'use strict';

const accum = (str) => {
let newWord = str.toLowerCase().split("");
for(let i=0; i<newWord.length;i++){
  newWord[i] = newWord[i].toUpperCase() + newWord[i].repeat(i);
}
  return newWord.join('');
}

console.log(accum('monkey'));