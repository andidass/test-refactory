// ! NOT YET FIXED
let arr = [15, 3, 1];
let total = arr.reduce((a, b) => a + b, 0);
if (
  Math.sqrt(5 * total ** 2 + 4) % 1 == 0 ||
  Math.sqrt(5 * total ** 2 - 4) % 1 == 0
) {
  console.log("Your number is a Fibonacci number!");
} else {
  console.log("Your number is not a Fibonacci number.");
  let c = 0;
  while (1) {
    c += 1;
    if (
      Math.sqrt(5 * (total + c) ** 2 + 4) % 1 == 0 ||
      Math.sqrt(5 * (total + c) ** 2 - 4) % 1 == 0
    ) {
      console.log(
        "%s is the closest  Fibonacci number to your entry." % String(total + c)
      );
      break;
    }
    if (
      Math.sqrt(5 * (total - c) ** 2 + 4) % 1 == 0 ||
      Math.sqrt(5 * (total - c) ** 2 - 4) % 1 == 0
    ) {
      console.log(
        "%s is the closest Fibonacci number to your entry." % String(total - c)
      );
      break;
    }
  }
}
