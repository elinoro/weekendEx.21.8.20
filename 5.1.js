let word = 'safari';
const trim = (word1) => {
  word1 = word1.split("").slice(1, (word1.length-1)).join("");
  return word1;
}
console.log(trim(word));