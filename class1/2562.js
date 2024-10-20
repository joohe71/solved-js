const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split("\n").map(Number);

const sortedData = [...inputData].sort((a, b) => b - a); // 내림차순

console.log(sortedData[0]);
console.log(inputData.indexOf(sortedData[0]) + 1);
