module.exports = function reverse (n) {
  let stringReverseN = n.toString();

  if (stringReverseN[0] == '-'){
    stringReverseN = stringReverseN.slice(1);
  }

  stringReverseN = stringReverseN.split('').reverse().join('');

  return Number(stringReverseN);
}
