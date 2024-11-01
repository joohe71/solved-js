const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

// 메모리 초과
// console.log(
//   inputData[3]
//     .split(" ")
//     .map(Number)
//     .map((item) =>
//       [...new Set(inputData[1].split(" ").map(Number))].includes(item) ? 1 : 0
//     )
//     .join("\n")
// );

// Binary Search(이분 탐색)
const arr = inputData[3].split(" ").map(Number);
const standard = inputData[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const result = [];

arr.forEach((m) => {
  //m 배열 순회
  let start = 0;
  let end = standard.length - 1;
  let isNumberInArray = false; //m 요소가 n 배열에 있는지 판별하는 변수
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (m < standard[mid]) {
      end = mid - 1;
    } else if (m > standard[mid]) {
      start = mid + 1;
    } else {
      //m == standard[mid]
      isNumberInArray = true;
      break;
    }
  }
  if (isNumberInArray) result.push(1);
  else result.push(0);
});

console.log(result.join("\n"));
