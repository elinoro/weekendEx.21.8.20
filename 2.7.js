const op = '+';
const num1 = 7;
const num2 = 10;
const operator = (op1, num3, num4) => {
  let answer;
  switch (op1) {
    case '+':
      answer = num3+num4;
      return(num3 + '+' + num4 + '=' + answer)
      break;
    case '-':
      answer = num3-num4;
      return(num3 + '-' + num4 + '=' + answer)
      break;
    case '*':
      answer = num3*num4;
      return(num3 + '*' + num4 + '=' + answer)
      break;
    case '/':
      answer = num3/num4;
      return(num3 + '/' + num4 + '=' + answer)
      break;
      default:
      return("Non valid");
  }
}

console.log(operator(op, num1, num2));