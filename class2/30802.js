const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim();

let range = 1,
  block = 1;

while (block < Number(inputData)) {
  block += 6 * range;

  range++;
}

console.log(range);
