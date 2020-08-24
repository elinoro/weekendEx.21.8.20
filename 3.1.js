'use strict';

const nb_year = (p0, percent, aug, p) => {
  let n = 0;
  while(p0<p){
    p0 = p0 * (1+(percent/100)) + aug;
    n++;
  }
  return n;
}
console.log(nb_year(1000, 2, 50, 1200));