function solution(s) {
  const appeard = new Map();
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (appeard.has(s[i])) {
      appeard.set(s[i], appeard.get(s[i]) + 1)
    } else {
      appeard.set(s[i], 1)
    }
  }
  console.log(appeard)
  for (let [key, value] of appeard) {
    if (value == 1) {
      answer.push(key);
    }
  }
  answer.sort();
  return answer.join('');
}
