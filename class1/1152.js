const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split(" ");

console.log(inputData[0] === "" ? 0 : inputData.length);
