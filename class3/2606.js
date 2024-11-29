const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");
const N = +inputData.shift();
const M = +inputData.shift();

const graph = Array.from(Array(N + 1), () => []);
const visited = Array.from(Array(N + 1), () => false);
visited[1] = true;
let count = 0;

for (let i = 0; i < M; i++) {
  const [first, second] = inputData[i].split(" ").map(Number);
  graph[first].push(second);
  graph[second].push(first);
}

const dfs = (start) => {
  for (let i of graph[start]) {
    if (visited[i] === false) {
      visited[i] = true;
      count++;
      dfs(i);
    }
  }
};

dfs(1);

console.log(count);
