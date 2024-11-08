const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");
// const inputData = [
//   "10",
//   "6 3 2 10 10 10 -10 -10 7 3",
//   "8",
//   "10 9 -5 2 3 4 5 -10",
// ];

// let result = [];
// inputData[3]
//   .split(" ")
//   .map(Number)
//   .map((item) => {
//     let sum = 0;
//     for (let i = 0; i < inputData[1].split(" ").map(Number).length; i++) {
//       if (inputData[1].split(" ").map(Number).includes(item)) {
//         item === inputData[1].split(" ").map(Number)[i] && (sum += 1);
//       } else break;
//     }
//     // inputData[1]
//     //   .split(" ")
//     //   .map(Number)
//     //   .map((value) => value === item && (sum += 1));
//     result.push(sum);
//   });

let N = inputData[1].split(" ").map(Number);
let M = inputData[3].split(" ").map(Number);
let map = new Map();
N.forEach((el) => {
  if (map.has(el)) map.set(el, map.get(el) + 1);
  else map.set(el, 1);
});
let answer = [];
M.forEach((el) => answer.push(map.get(el) || 0));
console.log(answer.join(" "));
