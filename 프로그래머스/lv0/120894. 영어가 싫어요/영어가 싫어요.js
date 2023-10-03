function solution(numbers) {
  const english = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  let answer = numbers;
  for (let i = 0; i<10; i++) {
    answer = answer.replaceAll(english[i], i);
  }
  return +answer;
}