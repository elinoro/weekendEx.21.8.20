const input = require('readline-sync');

let num = parseInt(input.question("Enter a positive number: "));
let sum = 0;
const summation = (num) => {
  if(num>0){
    for(let i=1; i<=num; i++){
      sum+=i;
    }
    return sum;
  }
  else{
    console.log("The number is not valid");
  }
}

console.log(summation(num));
