const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

for (let i = 0; i < Number(inputData[0]); i++) {
  console.log(
    Number(inputData[i + 1].split(" ")[0]) +
      Number(inputData[i + 1].split(" ")[1])
  );
}
