const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("");
let arr = Array.from({ length: 26 }, (v, i) =>
  String.fromCharCode(i + 65).toLowerCase()
);
console.log(
  arr
    .map((item) => (inputData.includes(item) ? inputData.indexOf(item) : -1))
    .join(" ")
);
