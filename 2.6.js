let year = 200;

const checkCentury = (year) => {
  let century;
  century = (year%100===0) ? (Math.abs(year)/100) : parseInt(Math.abs(year)/100)+1;
  const message = (year>0) ? `Century: ${century}` : `Century: ${century} B.C`;
  return message;
}

console.log(checkCentury(200));
console.log(checkCentury(264));
console.log(checkCentury(1820));
console.log(checkCentury(-200));
console.log(checkCentury(-264));
console.log(checkCentury(-1820));

