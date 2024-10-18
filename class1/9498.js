const fs = require("fs");
const inputData = Number(fs.readFileSync(0, "utf8").toString());

const fn = () => {
  if (inputData >= 90) return "A";
  else if (inputData >= 80 && inputData < 90) return "B";
  else if (inputData >= 70 && inputData < 80) return "C";
  else if (inputData >= 60 && inputData < 70) return "D";
  else return "F";
};

console.log(fn());
