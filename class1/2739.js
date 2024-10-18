const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8");

for (let i = 0; i < 9; i++) {
  //   console.log(`${inputData} * ${i + 1} = ${Number(inputData) * (i + 1)}`);
  console.log(Number(inputData), "*", i + 1, "=", Number(inputData) * (i + 1));
}
