const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split("\n");

const list = inputData[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(`${list[0]} ${list[Number(inputData[0]) - 1]}`);
