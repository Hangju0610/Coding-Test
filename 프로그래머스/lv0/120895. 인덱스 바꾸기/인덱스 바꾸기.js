function solution(my_string, num1, num2) {
  let answer = my_string.split('')
  const string1 = my_string[num1];
  const string2 = my_string[num2];
  answer[num1] = string2;
  answer[num2] = string1;

  return answer.join('');
}