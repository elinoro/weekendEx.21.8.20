const num1 = 484;
const findNextSquare = (num) => {
  const square = Math.sqrt(num)+1;
  if(Number.isInteger(square)){
    return Math.pow(square, 2);
  }
  else{
    return -1;
  }
} 

console.log(findNextSquare(num1));