const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split("\n");

for (let i = 0; i < Number(inputData[0]); i++) {
  let word = "";
  inputData[i + 1]
    .split(" ")[1]
    .split("")
    .map(
      (item) => (word += item.repeat(Number(inputData[i + 1].split(" ")[0])))
    );
  console.log(word);
}
