const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split(" ");

const isPrime = (n) => {
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

for (let i = +inputData[0]; i <= +inputData[1]; i++) {
  if (i === 2) console.log(i);
  else {
    i !== 1 && isPrime(i) && console.log(i);
  }
}
