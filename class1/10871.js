const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const B = parseInt(inputData[0].split(" ")[1]);
const list = inputData[1].split(" ");

const result = list.filter((item) => Number(item) < B).join(" ");
console.log(result);
