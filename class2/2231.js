const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim();

let result = 0;
for (let i = 0; i < Number(inputData); i++) {
  const stringNumber = i.toString().split("").map(Number);

  if (stringNumber.reduce((a, b) => a + b) + i === Number(inputData)) {
    result = i;
    break;
  }
}

console.log(result);
