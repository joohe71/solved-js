const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

inputData.shift();
const copied = new Set(inputData);

console.log(
  [...copied]
    .sort()
    .sort((a, b) => a.length - b.length)
    .join("\n")
);
