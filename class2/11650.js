const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

inputData.shift();

console.log(
  inputData
    .sort((a, b) => Number(a.split(" ")[1]) - Number(b.split(" ")[1]))
    .sort((a, b) => Number(a.split(" ")[0]) - Number(b.split(" ")[0]))
    .join("\n")
);
