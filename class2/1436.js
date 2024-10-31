const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim();

let number = 665;
let count = 0;

while (count < Number(inputData)) {
  number += 1;
  if (number.toString().includes("666")) count += 1;
}

console.log(number);
