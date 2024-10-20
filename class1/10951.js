const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

for (let i = 0; i < inputData.length; i++) {
  console.log(
    Number(inputData[i].split(" ")[0]) + Number(inputData[i].split(" ")[1])
  );
}
