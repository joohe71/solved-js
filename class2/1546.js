const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const scoreData = inputData[1].split(" ").map(Number);
const maxScore = Math.max(...scoreData);
console.log(
  scoreData.map((item) => (item / maxScore) * 100).reduce((a, b) => a + b) /
    Number(inputData[0])
);
