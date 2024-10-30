const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 유클리드 호제법 : a를 b로 나눈 나머지를 r이라고 했을 때, GCD(a, b) = GCD(b, r)과 같다는 것이다.
const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);
console.log(gcd(inputData[0], inputData[1]));
console.log(lcm(inputData[0], inputData[1]));
