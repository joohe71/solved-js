const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

let result = 0;
for (let i = 0; i < inputData.length; i++) {
  !isNaN(Number(inputData[i])) && (result = i);
}
const num = Number(inputData[result]) + 3 - result;
if (num % 3 === 0 && num % 5 === 0) console.log("FizzBuzz");
else if (num % 3 === 0 && num % 5 !== 0) console.log("Fizz");
else if (num % 3 !== 0 && num % 5 === 0) console.log("Buzz");
else console.log(num);
