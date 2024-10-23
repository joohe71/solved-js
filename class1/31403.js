const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split("\n");
const inputData2 = inputData.map(Number);

console.log(inputData2[0] + inputData2[1] - inputData2[2]);
console.log(inputData[0] + inputData[1] - inputData[2]);
