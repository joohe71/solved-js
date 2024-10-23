const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

console.log(inputData[0].split("")[Number(inputData[1]) - 1]);
