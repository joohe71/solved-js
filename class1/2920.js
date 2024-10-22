const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ").map(Number);

if ([...inputData].sort((a, b) => a - b).join("") === inputData.join(""))
  console.log("ascending");
else if ([...inputData].sort((a, b) => b - a).join("") == inputData.join(""))
  console.log("descending");
else console.log("mixed");
