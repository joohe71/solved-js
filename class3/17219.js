const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const [M, N] = inputData.shift().split(" ").map(Number);

const list = inputData.slice(0, M);

// 인덱스를 미리 계산하여 저장
const indexMap = new Map(
  list.map((item) => [item.split(" ")[0], item.split(" ")[1]])
);

console.log(
  inputData
    .slice(inputData.length - N, inputData.length)
    .map((item) => indexMap.get(item))
    .join("\n")
);
