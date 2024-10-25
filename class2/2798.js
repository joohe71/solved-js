const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");
const [N, M] = inputData[0].split(" ").map(Number);
const arr = inputData[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;

//첫 번째 카드
for (let i = 0; i < N - 2; i++) {
  //두 번째 카드
  for (let j = i + 1; j < N - 1; j++) {
    //세 번째 카드
    for (let k = j + 1; k < N; k++) {
      //선택된 카드 3장의 합을 sum에 저장
      sum = arr[i] + arr[j] + arr[k];
      //sum이 기존의 result값보다 크고 M보다 작은지 확인
      if (sum <= M && sum > result) {
        //해당되면 result값을 sum값으로 변경
        result = sum;
      }
    }
  }
}

console.log(result);
