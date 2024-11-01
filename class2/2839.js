const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim();

const N = Number(inputData);
let answer = -1;

let fivePack = Math.floor(N / 5);

while (fivePack >= 0) {
  let remaining = N - fivePack * 5;

  if (remaining % 3 === 0) {
    answer = remaining / 3 + fivePack;
    break;
  } else {
    fivePack -= 1;
  }
}

console.log(answer);
