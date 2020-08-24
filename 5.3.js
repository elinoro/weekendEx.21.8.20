const camelCase = (str) => {
  let result = str.split("-");
  return result.map(word => {
    if(word === result[0]){
      return word;
    }
  return word = word[0].toUpperCase() + word.substring(1)}
  ).join('');
}

console.log(camelCase('this-is-sparta'));