import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];
// const newNumbers = numbers.map((n) => n * n);
// console.log(newNumbers);

//Map -Create a new array by doing something with each item in an array.
const newNumberArray1 = numbers.map((x) => x * 2);
console.log(newNumberArray1);

//Filter - Create a new array by keeping the items that return true.
const newNumberArray2 = numbers.filter((num) => num < 10);
console.log(newNumberArray2);

// Reduce - Accumulate a value by doing something to each item in an array.
var newNumberArray3 = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(newNumberArray3);

//Find - find the first item that matches from an array.
const newNumberArray4 = numbers.find((num) => num > 10);
console.log(newNumberArray4);

//FindIndex - find the index of the first item that matches.
const newNumberArray5 = numbers.findIndex((num) => num > 10);
console.log(newNumberArray5);
