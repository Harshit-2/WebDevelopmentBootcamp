// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// const newNumber1 = numbers.map(function (n) {
//   return n * 2;
// });
// console.log(newNumber1);

// //Filter - Create a new array by keeping the items that return true.
// const newNumber2 = numbers.filter(function (num) {
//   return num > 10;
// });
// console.log(newNumber2);

// //Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber3 = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });
// console.log(newNumber3);

// //Find - find the first item that matches from an array.
// const newNumber4 = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(newNumber4);

// //FindIndex - find the index of the first item that matches.
// const newNumber5 = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(newNumber5);

import emojipedia from "./emojipedia";

console.log(emojipedia[0].meaning.substring(0, 100));

const data = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(data);
