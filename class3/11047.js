const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const [N, K] = inputData.shift().split(" ").map(Number);

let data = inputData
  .map(Number)
  .filter((item) => K >= item)
  .sort((a, b) => b - a);

let result = 0;
let copiedK = K;

for (let i = 0; i < data.length; i++) {
  result += Math.floor(copiedK / data[i]);
  copiedK -= data[i] * Math.floor(copiedK / data[i]);

  if (copiedK === 0) break;
}
console.log(result);
