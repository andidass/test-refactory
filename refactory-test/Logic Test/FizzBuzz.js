function FizzBuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    i % 5 === 0 && i % 3 === 0
      ? arr.push("FizzBuzz")
      : i % 3 === 0
      ? arr.push("Fizz")
      : i % 5 === 0
      ? arr.push("Buzz")
      : arr.push(i);
  }
  return arr;
}
