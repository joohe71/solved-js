const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = inputData.shift();

const dp = new Array(11);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= Math.max(...inputData); i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

inputData.forEach((num) => console.log(dp[num]));
