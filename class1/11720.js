const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split("\n");

const list = inputData[1].split("").map(Number);
console.log(list.reduce((a, b) => a + b));
