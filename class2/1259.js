const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

inputData.slice(0, inputData.length - 1).map((item) => {
  let isSame = item.length === 1 ? true : false;
  for (let i = 0; i < Math.floor(item.length / 2); i++) {
    if (item[i] === item[item.length - 1 - i]) isSame = true;
    else {
      isSame = false;
      break;
    }
  }
  console.log(isSame ? "yes" : "no");
});
