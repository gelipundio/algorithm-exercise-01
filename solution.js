// function sumarize(inputArray) {
//   let total = 0;
// if (inputArray) {
//   for (let i = 0; i < inputArray.length; i++) {
//     total = total + inputArray[i];
//   }
//   return total;
// }
// return 0;
// }

const sumarize = function (inputArray) {
  let total = 0;
  if (inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
      total = total + inputArray[i];
    }
    return total;
  }
  return 0;
};
module.exports = {
  sumarize,
};
