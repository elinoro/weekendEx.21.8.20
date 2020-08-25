
const tribonacciFunc = (sig, index) => {
  for (i = 3; i < index; i++) {
    sig.push(sig[i - 1] + sig[i - 2] + sig[i - 3]);
  }
  console.log(sig);
  return sig[index - 1];
};

console.log(tribonacciFunc([0, 0, 1], 7));
console.log(tribonacciFunc([0, 1, 1], 11));