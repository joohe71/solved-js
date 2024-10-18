const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString();

for (let i = 0; i < Number(inputData); i++) {
  console.log(i + 1);
}
