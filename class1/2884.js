const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split(" ");
const hour = Number(inputData[0]) * 60;
const minutes = Number(inputData[1]);
console.log(
  `${
    Math.floor((hour + minutes - 45) / 60) < 0
      ? 23
      : Math.floor((hour + minutes - 45) / 60)
  } ${
    (hour + minutes - 45) % 60 < 0
      ? ((hour + minutes - 45) % 60) + 60
      : (hour + minutes - 45) % 60
  }`
);
