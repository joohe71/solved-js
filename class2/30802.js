const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const list = inputData[1].split(" ").map(Number);
const [t, p] = inputData[2].split(" ").map(Number);
let sum = 0;
list.map((item) => {
  if (item === 0) {
  } else if (item <= t) {
    sum += 1;
  } else sum += Math.ceil(item / t);
});

console.log(sum);
console.log(
  `${Math.floor(Number(inputData[0]) / p)} ${Number(inputData[0]) % p}`
);
