const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim();
const star = "*";
for (let i = 0; i < Number(inputData); i++) {
  console.log(
    Array(Number(inputData) - i - 1)
      .fill(" ")
      .join("") + star.repeat(i + 1)
  );
}
