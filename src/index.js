module.exports = function getZerosCount(number) {
  let result = 0;
  while (number >= 5){
    result += Math.trunc(number / 5);
    number = Math.trunc(number/5);
  }
    return result;
}
