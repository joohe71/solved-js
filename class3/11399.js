const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");
inputData.shift();
const result = [];
const list = inputData[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
list.reduce((a, b) => {
  result.push(a + b);
  return a + b;
});
console.log(result.reduce((a, b) => a + b, list[0]));
