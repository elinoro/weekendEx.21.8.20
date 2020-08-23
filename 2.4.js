const array = [4, 4, 4, 5, 4, 4, 4];
const check = (array1) => {
  for(let i=1; i<array1.length; i++){
    if(array1[i]===array1[i-1]){
      continue;
    }
    else{
      let exception = array1[i];
      return exception;
    }
  }
}

console.log(check(array));
