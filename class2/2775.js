const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");
const num = +inputData.shift();
for (let i = 1; i <= num; i += 1) {
  // k 층 n 호
  const k = +inputData.shift();
  const n = +inputData.shift();

  // 각 방당 2차원 배열로 미리 만들어줌
  // apartment[층][호]
  const apartment = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  apartment[0].forEach((_, index) => (apartment[0][index] = index));

  for (let j = 1; j <= k; j += 1) {
    for (let g = 1; g <= n; g += 1) {
      apartment[j][g] = apartment[j - 1][g] + apartment[j][g - 1];
    }
  }

  console.log(apartment[k][n]);
}
