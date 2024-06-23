// var generateName = require('sillyname');
// const superheroes = require('superheroes');

import generateName from "sillyName";
import superheroes from "superheroes";

var sillyName = generateName();

console.log(`My nane is ${sillyName}.`);
console.log(`I am ${superheroes.random()}.`)