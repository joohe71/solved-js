const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const N = +inputData.shift();

let result = [];
let answer = [];

inputData.map((item) => {
  if (item === "top") answer.push(result[result.length - 1] ?? -1);
  else if (item === "size") answer.push(result.length);
  else if (item === "empty") answer.push(result.length === 0 ? 1 : 0);
  else if (item === "pop") {
    const number = result.pop();
    answer.push(number ?? -1);
  } else {
    const [_, number] = item.split(" ");
    result.push(+number);
  }
});

console.log(answer.join("\n"));
