var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
const string = input[0];
let answer = "";
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (let i = 0; i < alphabet.length; i++) {
  answer = answer + string.indexOf(alphabet[i]) + " ";
}
console.log(answer);