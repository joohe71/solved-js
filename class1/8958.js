const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

for (let i = 0; i < Number(inputData[0]); i++) {
  let result = [];
  inputData[i + 1]
    .split("")
    .map((item, index) =>
      item === "O"
        ? result.push(1 + (index === 0 ? 0 : result[index - 1]))
        : result.push(0)
    );
  console.log(result.reduce((a, b) => a + b));
}
