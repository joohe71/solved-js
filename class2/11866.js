const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split(" ");
const [N, K] = inputData.map(Number);

let list = Array.from({ length: N }, (_, i) => i + 1);
let result = [];

let index = 0; // 현재 인덱스

while (list.length > 0) {
  index = (index + K - 1) % list.length; // K번째 사람의 인덱스 계산
  const number = list.splice(index, 1)[0]; // K번째 사람 제거
  result.push(number);
}

console.log(`<${[...result, ...list].join(", ")}>`);
