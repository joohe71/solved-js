const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const [N, M] = inputData.shift().split(" ").map(Number);

const notListenedList = inputData.slice(0, N);
const notSeenList = inputData.slice(N, inputData.length);
// Set을 사용하여 빠른 조회를 가능하게 함
const notSeenSet = new Set(notSeenList);
const notListenedSet = new Set(notListenedList);

let result = [];
if (N > M) {
  result = notSeenList.filter((item) => notListenedSet.has(item));
} else {
  result = notListenedList.filter((item) => notSeenSet.has(item));
}
result.sort();
console.log(result.length);
console.log(result.join("\n"));
