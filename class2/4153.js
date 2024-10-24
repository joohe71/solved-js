const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");
inputData.pop();
inputData.map((item) => {
  const sorted = item
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  sorted[0] ** 2 + sorted[1] ** 2 === sorted[2] ** 2
    ? console.log("right")
    : console.log("wrong");
});
