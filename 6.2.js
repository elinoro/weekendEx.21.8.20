function countDuplicates(str1) {
  let amount = 0;
  obj = {};
  str1.toLowerCase().split('').map(text => {
      if (!obj.exists(text)) {
        obj[text] = 1;
      } else {
          if (obj[text] === 1) {
            amount += 1;
          }
          obj[text] = obj[text] + 1;
      }
  });
  
  return obj;
}

console.log(countDuplicates('goodmorning'));