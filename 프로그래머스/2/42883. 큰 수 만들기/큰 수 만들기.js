function solution(number, k) {
  let numberArray = number.split("");
  let stack = [];

  for (let i = 0; i < numberArray.length; i++) {
    while (
      k > 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] < numberArray[i]
    ) {
      stack.pop();
      k--;
    }
    stack.push(numberArray[i]);
  }

  // 'k'가 여전히 남아있다면 가장 뒷부분의 숫자 제거
  while (k > 0) {
    stack.pop();
    k--;
  }

  // 스택이 비어있다면 0을 반환
  return stack.length === 0 ? "0" : stack.join("");
}



