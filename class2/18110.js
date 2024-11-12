const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const len = +inputData.shift();
if (len === 0) console.log(0);
else {
  const N = Math.round(len * 0.15);
  const list = inputData.map(Number);
  list.sort((a, b) => a - b);
  const result = list.filter((_, index) => index >= N && index < len - N);
  console.log(Math.round(result.reduce((a, b) => a + b, 0) / result.length));
}
