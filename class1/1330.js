const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

const compared = () => {
  if (A > B) return ">";
  else if (A < B) return "<";
  else return "==";
};

console.log(compared());
