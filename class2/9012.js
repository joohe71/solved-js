const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

inputData.shift();

inputData.map((item) => {
  let result = [];
  const list = item.split("");

  for (let i = 0; i < list.length; i++) {
    if (list[i] === "(") result.push(list[i]);
    else if (list[i] === ")" && result.length !== 0) result.pop();
    else if (list[i] === ")" && result.length === 0) {
      result.push(list[i]);
      break;
    }
  }
  console.log(result.length === 0 ? "YES" : "NO");
});
