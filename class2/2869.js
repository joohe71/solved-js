const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 시간초과
// let result = 0;
// let day = 0;

// while (result < inputData[2]) {
//   result += inputData[0];
//   day += 1;
//   if (result >= inputData[2]) {
//     break;
//   } else result -= inputData[1];
// }

const up = inputData[0];
const down = inputData[1];
const totalMeter = inputData[2];
let days = 0;
days = Math.ceil((totalMeter - down) / (up - down));

console.log(days);
