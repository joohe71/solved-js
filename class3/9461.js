const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = inputData.shift();

const dp = new Array(101);

dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 2;
dp[6] = 3;
dp[7] = 4;
dp[8] = 5;

for (let i = 6; i <= Math.max(...inputData); i++) {
  dp[i] = dp[i - 5] + dp[i - 1];
}

inputData.forEach((num) => console.log(dp[num]));
