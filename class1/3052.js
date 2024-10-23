const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = [];

inputData.map((item) => !result.includes(item % 42) && result.push(item % 42));

console.log(result.length);
