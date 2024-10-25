const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

// 해시
const list = inputData[1].split("").map((item) => item.charCodeAt() - 96);
// 50점
// console.log(
//   list.map((item, index) => item * 31 ** index).reduce((a, b) => a + b)
// );

// 100점
let result = 0;
let r = 1;
for (let i = 0; i < list.length; i++) {
  result += list[i] * r;
  result %= 1234567891;
  r *= 31;
  r %= 1234567891;
}

console.log(result);
