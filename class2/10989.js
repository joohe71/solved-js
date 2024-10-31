// 10989 대신 2750
const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

inputData.shift();

console.log(inputData.sort((a, b) => a - b).join("\n"));
