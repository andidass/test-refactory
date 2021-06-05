function isPalindrome(kata) {
  let reversed = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    reversed += kata[i].toLowerCase();
  }
  return kata.toLowerCase() === reversed
    ? console.log(kata, "-->", "palindrome")
    : console.log(kata, "-->", "not palindrome");
}
isPalindrome("Radar");
