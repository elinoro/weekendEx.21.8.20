const str1 = "ertyuiopertyuiopsdfgh";
const str2 = "mnbvcxmjgggrfuykgu";

const longString = (str3, str4) => {
  let finalStr = [];
  const joinedStr = str3.concat(str4);
  for (let char of joinedStr) {
    !finalStr.includes(char) && (finalStr = finalStr.concat(char));
  }
  return finalStr.sort().join("");
};

console.log(longString(str1, str2));
