const fibonacciSequence = (a, b, n) => {
  let c;
  for(let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
  }
  return c;
};

console.log(fibonacciSequence(0, 1, 9));