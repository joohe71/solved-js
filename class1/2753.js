const fs = require("fs");
const inputData = Number(fs.readFileSync(0, "utf8").toString());

const fn = () => {
  if (inputData % 4 === 0 && inputData % 100 !== 0) return 1;
  else if (inputData % 400 === 0) return 1;
  else return 0;
};

console.log(fn());
