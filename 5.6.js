const maskify = (password) => {
  let result = "";
  for (let i = 0; i < password.length - 4; i++) {
    result += "#";
  }
  result += password.substring(password.length - 4, password.length);
  return result;
}

console.log(maskify('lukeIamYourFather'));