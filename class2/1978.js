const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const isPrime = (n) => {
  if (n == 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(inputData[1].split(" ").filter((v) => isPrime(Number(v))).length);
