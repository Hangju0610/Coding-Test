function solution(array) {
  const answer = [0,0]
  answer[0] = array.reduce((acc, cur, index) => {
    return acc < cur ? cur : acc
  },0)
  answer[1] = array.indexOf(answer[0])
  return answer
}