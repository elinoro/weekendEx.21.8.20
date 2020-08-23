const input = require('readline-sync');

let year = 1956;
let century;
if(year>0){
  if(year%100===0){
    century = (year/100);
  }
  else{
    century = parseInt(year/100)+1;
  }
  console.log(`Century: ${century}`);
}
else{
  if(year%100===0){
    century = (year/100);
  }
  else{
    century = parseInt(year/100)+1;
  }
  console.log(`Century: ${century} B.C`);
}
