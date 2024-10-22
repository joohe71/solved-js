const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split("\n");

for (let i = 0; i < Number(inputData[0]); i++) {
  const list = inputData[i + 1].split(" ").map(Number);

  // 나머지가 0일 경우 고려
  if (list[2] % list[0] === 0) console.log(list[0] * 100 + list[2] / list[0]);
  else
    console.log((list[2] % list[0]) * 100 + Math.floor(list[2] / list[0]) + 1);
}
