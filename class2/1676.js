const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim();

if (Number(inputData) === 0) console.log(0);
else {
  const resultArray = BigInt(
    Array.from({ length: Number(inputData) }, (_, index) => index + 1).reduce(
      (a, b) => BigInt(a) * BigInt(b)
    )
  )
    .toString()
    .split("")
    .reverse();

  let number = 0;
  for (let i = 0; i < resultArray.length; i++) {
    if (resultArray[i] === "0") number += 1;
    else break;
  }
  console.log(number);
}
