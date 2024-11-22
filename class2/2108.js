const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");
inputData.shift();
const list = inputData.map(Number);
const sortedList = list.sort((a, b) => a - b);
const frequency = {};

// 빈도수 계산
list.forEach((num) => {
  frequency[num] = (frequency[num] || 0) + 1;
});
// 최대 빈도수 찾기
const maxFreq = Math.max(...Object.values(frequency));
// 최빈값 찾기
const maxValue = Object.keys(frequency)
  .filter((num) => frequency[num] === maxFreq)
  .map(Number)
  .sort((a, b) => a - b);

console.log(
  Math.round(list.reduce((a, b) => a + b, 0) / list.length) === -0
    ? 0
    : Math.round(list.reduce((a, b) => a + b, 0) / list.length)
);
console.log(sortedList[(sortedList.length - 1) / 2]);
console.log(maxValue.length > 1 ? maxValue[1] : maxValue[0]);
console.log(sortedList[sortedList.length - 1] - sortedList[0]);
