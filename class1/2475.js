const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

const sumArray = inputData.map((item) => Number(item) ** 2);
console.log(sumArray.reduce((a, b) => a + b) % 10);
