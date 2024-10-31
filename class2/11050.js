const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let a = 1;
let b = 1;
for (let i = 0; i < inputData[1]; i++) {
  a *= inputData[0] - i;
  b *= i + 1;
}

console.log(a / b);
