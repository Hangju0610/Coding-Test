function solution(n, numlist) {
  const answer = numlist.filter((v) => {
    return v % n === 0;
  })
  return answer;
}