let checkIsIsogram = (str) => str.split("").every((current, index) => str.indexOf(current) == index);

console.log(checkIsIsogram("Encyclopedia"));
console.log(checkIsIsogram("AbCdefghijklmnop"));
console.log(checkIsIsogram("ABA"));
console.log(checkIsIsogram("ertyuiopasdfghjkl"));