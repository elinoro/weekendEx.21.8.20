'use strict';

let name = 'Elinor Oberhard';

const initials = (name1) => {
  name1 = name1.split(' ').map((n)=>n[0]).join('.');
  return name1;
}

console.log(initials(name));