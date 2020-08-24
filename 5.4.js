const toWeirdCase  = (string) => {
  let  newString = [];
  for( let i in string ) {
    (i%2 == 0) ? newString.push(string[i].toUpperCase()) : newString.push(string[i].toLowerCase());
  }
  return newString.join('');
}

console.log(toWeirdCase('elephant'));