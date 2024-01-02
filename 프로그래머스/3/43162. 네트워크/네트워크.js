function DFS(computers, node, visited) {
  // 현재 방문한 node true 처리
  visited[node] = true;
  for (let j = 0; j < computers.length; j++) {
    // 한번도 들어가지 않은 노드 & 연결이 되어 있다면?
    if (computers[node][j] == 1 && !visited[j]) {
      DFS(computers, j, visited);
    }
  }
}

function solution(n, computers) {
  // DFS를 통해 구현
  // 이미 지나간 것은 넘어가도록 구현
  const visited = new Array(n).fill(false);
  let network = 0;
  for (let i = 0; i < n; i++) {
    // 이미 탐색한 node라면 반복문 통과
    if (visited[i]) {
      continue;
    } else {
      DFS(computers, i, visited);
      network++;
    }
  }
  return network;
}

