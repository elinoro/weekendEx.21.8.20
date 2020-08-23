const array = [1, -78, ,73, 14, 2.5, 25];

const sumMinTwo = (array1) => {
  let arrayPositive = [];
  for (let i = 0; i < array1.length; i++) {
    if ((array1[i] > 0) && Number.isInteger(array1[i]) === true) {
      arrayPositive.push(array1[i]);
    }
  }
  const sort = arrayPositive.sort();
  const sum = arrayPositive[0] + arrayPositive[1];
  return sum; 
}

console.log(sumMinTwo(array));