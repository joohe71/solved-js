const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split("\n").map(Number);

let object = Object.assign({}, Array(10).fill(0));

for (let i = 0; i <= 9; i++) {
  (inputData[0] * inputData[1] * inputData[2])
    .toString()
    .split("")
    .map(Number)
    .map((item) => (i === item ? (object[i] += 1) : (object[i] += 0)));
}

console.log(Object.values(object).join("\n"));
