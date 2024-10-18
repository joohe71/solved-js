const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8");

for (let i = 0; i < Number(inputData); i++) {
  const star = "*";
  console.log(star.repeat(i + 1));
}
