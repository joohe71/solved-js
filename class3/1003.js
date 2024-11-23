const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");
// const inputData = [3, 0, 1, 3];

const N = +inputData.shift();

// 시간 초과
// let result = [0, 0];

// const fibonacci = (n) => {
//   if (n == 0) {
//     result[0] += 1;
//     return 0;
//   } else if (n == 1) {
//     result[1] += 1;
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// };

// inputData.map((item) => {
//   fibonacci(+item);
//   console.log(result.join(" "));
//   result = [0, 0];
// });

const countFibonacci = (n) => {
  const returnObj = {
    zeroCount: [1, 0],
    oneCount: [0, 1],
  };

  if (n <= 1) {
    return returnObj;
  }

  for (let i = 2; i < n + 1; i++) {
    returnObj.zeroCount.push(
      returnObj.zeroCount[i - 1] + returnObj.zeroCount[i - 2]
    );
    returnObj.oneCount.push(
      returnObj.oneCount[i - 1] + returnObj.oneCount[i - 2]
    );
  }

  return returnObj;
};

// 미리 40까지의 list를 생성
const cache = countFibonacci(40);

inputData.map((item) => {
  console.log(`${cache.zeroCount[+item]} ${cache.oneCount[+item]}`);
});
