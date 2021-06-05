function reverse(kata) {
  let reversed = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    reversed += kata[i].toLowerCase();
  }
  return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}
